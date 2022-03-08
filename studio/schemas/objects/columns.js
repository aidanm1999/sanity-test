import React from "react";
import simplePortableText from "./simplePortableText";

export default {
    name: "columns",
    type: "object",
    title: "Columns",
    fields: [
        {
            ...simplePortableText,
            title: undefined,
            name: "left",
        },
        {
            ...simplePortableText,
            title: undefined,
            name: "right",
        },
    ],
    options: {
        editModal: "fullscreen",
        columns: 2,
    },
    preview: {
        component: () => (
            <div>
                <b>Columns</b>
                <p>Double click to open</p>
            </div>
        ),
    },
};
