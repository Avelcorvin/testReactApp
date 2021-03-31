import {AdaptiveCard, HostConfig} from "adaptivecards";
import React, { useEffect, useRef } from "react";
import "./style.css"
export const Card = ()=>{
  const ref = useRef(null);
  var card ={
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "TextBlock",
            "text": "Your registration is almost complete",
            "size": "Medium",
            "weight": "Bolder",
            "wrap": true
        },
        {
            "type": "TextBlock",
            "text": "What type of food do you prefer?",
            "wrap": true
        },
        {
            "type": "ImageSet",
            "imageSize": "medium",
            "images": [
                {
                    "type": "Image",
                    "url": "${hasMenu.hasMenuSection[0].image}"
                },
                {
                    "type": "Image",
                    "url": "${hasMenu.hasMenuSection[0].hasMenuSection[0].image}"
                },
                {
                    "type": "Image",
                    "url": "${hasMenu.hasMenuSection[0].hasMenuSection[1].image}"
                }
            ]
        }
    ],
    "actions": [
        {
            "type": "Action.ShowCard",
            "title": "${hasMenu.hasMenuSection[0].name}",
            "card": {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "TextBlock",
                        "text": "${hasMenu.hasMenuSection[0].description}",
                        "size": "Medium",
                        "wrap": true
                    },
                    {
                        "type": "Input.ChoiceSet",
                        "id": "SteakTemp",
                        "style": "expanded",
                        "choices": [
                            {
                                "title": "Rare",
                                "value": "rare"
                            },
                            {
                                "title": "Medium-Rare",
                                "value": "medium-rare"
                            },
                            {
                                "title": "Well-done",
                                "value": "well-done"
                            }
                        ]
                    },
                    {
                        "type": "Input.Text",
                        "id": "SteakOther",
                        "isMultiline": true,
                        "placeholder": "Any other preparation requests?"
                    }
                ],
                "actions": [
                    {
                        "type": "Action.Submit",
                        "title": "OK",
                        "data": {
                            "FoodChoice": "Steak"
                        }
                    }
                ],
                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
            }
        },
        {
            "type": "Action.ShowCard",
            "title": "${hasMenu.hasMenuSection[0].hasMenuSection[0].name}",
            "card": {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "TextBlock",
                        "text": "${hasMenu.hasMenuSection[0].hasMenuSection[0].description}",
                        "size": "Medium",
                        "wrap": true
                    },
                    {
                        "type": "Input.ChoiceSet",
                        "id": "ChickenAllergy",
                        "style": "expanded",
                        "isMultiSelect": true,
                        "choices": [
                            {
                                "title": "I'm allergic to peanuts",
                                "value": "peanut"
                            }
                        ]
                    },
                    {
                        "type": "Input.Text",
                        "id": "ChickenOther",
                        "isMultiline": true,
                        "placeholder": "Any other preparation requests?"
                    }
                ],
                "actions": [
                    {
                        "type": "Action.Submit",
                        "title": "OK",
                        "data": {
                            "FoodChoice": "Chicken"
                        }
                    }
                ],
                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
            }
        },
        {
            "type": "Action.ShowCard",
            "title": "${hasMenu.hasMenuSection[0].hasMenuSection[1].name}",
            "card": {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "TextBlock",
                        "text": "${hasMenu.hasMenuSection[0].hasMenuSection[1].description}",
                        "size": "Medium",
                        "wrap": true
                    },
                    {
                        "type": "Input.Toggle",
                        "id": "Vegetarian",
                        "title": "Please prepare it vegan",
                        "valueOn": "vegan",
                        "valueOff": "notVegan",
                        "wrap": false
                    },
                    {
                        "type": "Input.Text",
                        "id": "VegOther",
                        "isMultiline": true,
                        "placeholder": "Any other preparation requests?"
                    }
                ],
                "actions": [
                    {
                        "type": "Action.Submit",
                        "title": "OK",
                        "data": {
                            "FoodChoice": "Vegetarian"
                        }
                    }
                ],
                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
            }
        }
    ]
}

 
  
  var card2={
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "ColumnSet",
            "style": "accent",
            "bleed": true,
            "columns": [
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "Image",
                            "url": "${photo}",
                            "altText": "Profile picture",
                            "size": "Small",
                            "style": "Person"
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "Hi ${name}!",
                            "size": "Medium"
                        },
                        {
                            "type": "TextBlock",
                            "text": "Here's a bit about your org...",
                            "spacing": "None"
                        }
                    ]
                }
            ]
        },
        {
            "type": "TextBlock",
            "text": "Your manager is: **${manager.name}**"
        },
        {
            "type": "TextBlock",
            "text": "Your peers are:"
        },
        {
            "type": "FactSet",
            "facts": [
                {
                    "$data": "${peers}",
                    "title": "${name}",
                    "value": "${title}"
                }
            ]
        }
    ]
}

const card3={
  "type": "AdaptiveCard",
  "body": [
      {
          "type": "TextBlock",
          "size": "Medium",
          "weight": "Bolder",
          "text": "${title}",
          "wrap": true
      },
      {
          "type": "ColumnSet",
          "columns": [
              {
                  "type": "Column",
                  "items": [
                      {
                          "type": "Image",
                          "style": "Person",
                          "url": "${creator.profileImage}",
                          "size": "Small"
                      }
                  ],
                  "width": "auto"
              },
              {
                  "type": "Column",
                  "items": [
                      {
                          "type": "TextBlock",
                          "weight": "Bolder",
                          "text": "${creator.name}",
                          "wrap": true
                      },
                      {
                          "type": "TextBlock",
                          "spacing": "None",
                          "text": "Created {{DATE(${string(createdUtc)}, SHORT)}}",
                          "isSubtle": true,
                          "wrap": true
                      }
                  ],
                  "width": "stretch"
              }
          ]
      },
      {
          "type": "TextBlock",
          "text": "${description}",
          "wrap": true
      },
      {
          "type": "FactSet",
          "facts": [
              {
                  "$data": "${properties}",
                  "title": "${key}:",
                  "value": "${value}"
              }
          ]
      }
  ],
  "actions": [
      {
          "type": "Action.ShowCard",
          "title": "Set due date",
          "card": {
              "type": "AdaptiveCard",
              "body": [
                  {
                      "type": "Input.Date",
                      "id": "dueDate"
                  },
                  {
                      "type": "Input.Text",
                      "id": "comment",
                      "placeholder": "Add a comment",
                      "isMultiline": true
                  }
              ],
              "actions": [
                  {
                      "type": "Action.Submit",
                      "title": "OK"
                  }
              ],
              "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
          }
      },
      {
          "type": "Action.OpenUrl",
          "title": "View",
          "url": "${viewUrl}"
      }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}


  // Create an AdaptiveCard instance
  // Set its hostConfig property unless you want to use the default Host Config
  // Host Config defines the style and behavior of a card

  // Set the adaptive card's event handlers. onExecuteAction is invoked
  // whenever an action is clicked in the card


  const cards:any[] = [card,card3,card2];
 
  useEffect(()=>{
    const root:HTMLElement|null|any  = ref.current as any;
     cards.map((e)=>{
      const adaptiveCard = new AdaptiveCard();
      adaptiveCard.onExecuteAction=(EO)=>{};
      adaptiveCard.parse(e);
      const data = adaptiveCard.render();
      root.appendChild(data);
     })
  },[ref])
 
 
  return(
      <div
       ref={ref}
       style={{
         width:'300px'
        }}
       >
      </div>
    )
    
}