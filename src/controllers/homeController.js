import { Client, isNotionClientError } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const dbId = process.env.NOTION_DATABASE_ID;

export const home = (req, res) => {
  return res.render("base");
};

export const addItem = async (req, res) => {
  const { nickname, weekday, start, end, etc } = req.body;

  const response = await notion.databases.query({
    database_id: dbId,
    filter: {
      property: "nickname",
      title: {
        contains: nickname,
      },
    },
  });

  const notionProp = {
    nickname: {
      title: [
        {
          type: "text",
          text: {
            content: nickname,
          },
        },
      ],
    },
    weekday: {
      rich_text: [
        {
          type: "text",
          text: {
            content: JSON.stringify(weekday),
          },
        },
      ],
    },
    starttime: {
      rich_text: [
        {
          type: "text",
          text: {
            content: JSON.stringify(start),
          },
        },
      ],
    },
    endtime: {
      rich_text: [
        {
          type: "text",
          text: {
            content: JSON.stringify(end),
          },
        },
      ],
    },
    etc: {
      rich_text: [
        {
          type: "text",
          text: {
            content: etc,
          },
        },
      ],
    },
  };

  const successMessage = {
    message: "Success",
  };

  if (response.results[0]) {
    // Update
    const pageId = response.results[0].id;
    await notion.pages.update({
      page_id: pageId,
      properties: notionProp,
    });
    res.status(200).send(successMessage);
  } else {
    // Create
    await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: dbId,
      },
      properties: notionProp,
    });
    res.status(200).send(successMessage);
  }
};
