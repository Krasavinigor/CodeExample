/* eslint-disable max-len */
import {AxiosResponse} from "axios";

export const responseWithoutMutualRecruiters: AxiosResponse<unknown> =
{
  data: {
    "data": {
      "metadata": {
        "primaryResultType": "PEOPLE",
        "searchId": "0da529da-a97f-4975-ac63-ff2f14dff6a5",
        "filterAppliedCount": 0,
        "totalResultCount": 43,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.SearchClusterCollectionMetadata",
        ],
        "$type": "com.linkedin.voyager.dash.search.SearchClusterCollectionMetadata",
      },
      "entityUrn": "urn:li:collectionResponse:oeuEtcBuA8KprnHV/Nd2woN3xi1NrN62vYrOk7Qei2M=",
      "elements": [
        {
          "featureUnion": {
            "simpleText": {
              "textDirection": "USER_LOCALE",
              "text": "43 результата",
              "attributesV2": [],
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
              ],
              "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
            },
          },
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.SearchClusterViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.search.SearchClusterViewModel",
        },
        {
          "*results": [
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAChM3h8BrK-ilwQmbtNm0i3N9FYrQiTvbpw,SEARCH_SRP,DEFAULT)",
          ],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.SearchClusterViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.search.SearchClusterViewModel",
        },
        {
          "featureUnion": {
            "*feedbackCard": "urn:li:fsd_feedbackCard:SRP_FEEDBACK_PEOPLE",
          },
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.SearchClusterViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.search.SearchClusterViewModel",
        },
      ],
      "paging": {
        "total": 43,
        "start": 0,
        "count": 9,
        "links": [],
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.common.FullPaging",
        ],
        "$type": "com.linkedin.restli.common.CollectionMetadata",
      },
      "$type": "com.linkedin.restli.common.CollectionResponse",
    },
    "included": [
      {
        "entityUrn": "urn:li:fsd_profile:ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAAChM3h8BrK-ilwQmbtNm0i3N9FYrQiTvbpw",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:836553026",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Maksim Martinez",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Maksim Martinez ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Development Engineer – Akvelon, Inc.",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "N4l9nTDESiaLRI6PfYp0XQ==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C5603AQENB_bxPZaZrA/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1596799748426?e=1637798400&v=beta&t=5vSjSR4gnu6T7Y8Ba710b2JzATFogwh5UgChclxg6x4",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1596799748426?e=1637798400&v=beta&t=2xKAtdCIBVHLTNZCTRIavfsxLxJIxygZ9SFw1b6FnT0",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1596799748426?e=1637798400&v=beta&t=mRj3d_A-7hkfPw4uGCAMTKqmz6ocGzlNB05Shpp1WrA",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1596799748426?e=1637798400&v=beta&t=vkXMQw1wDiZc89tiAy0JZKZgC5pzugs6BK9hXLWSLIA",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Maksim Martinez",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославль",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Evgeniy Kokonov, Daria Doe и еще 32 общих контакта",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 0,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 18,
                    "length": 13,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
                    },
                    "start": 18,
                    "length": 13,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 38,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 38,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/maksim-Martinez-4021b01b4?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/maksim-Martinez-4021b01b4?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:771211416",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Raphael Dose",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Raphael Dose ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Development Engineer",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "m4BWq5LDTcWYtnTBaeb4JA==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/D4E35AQHQri7DHZbdXA/profile-framedphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1630675173618?e=1632492000&v=beta&t=FCNxHutyE-IismHLGTtq-WDXaSdgeZjUW40Og1b1ooY",
                        "expiresAt": 1632492000000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1630675173618?e=1632492000&v=beta&t=3yPDRTXYf6yPLvkxuuIZvxk7XRLFwPBo87cVmojmYWI",
                        "expiresAt": 1632492000000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1630675173618?e=1632492000&v=beta&t=j5VHn7Z4nOO8p4Xp832AgYu_R9Gs2tArRcp-U3WVsRs",
                        "expiresAt": 1632492000000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1630675173618?e=1632492000&v=beta&t=kh83fC7GvzyWmjjq3bDaIRn5plsosw3-pSLsOiD-dwk",
                        "expiresAt": 1632492000000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Raphael Dose",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославль",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Daria Doe, Алексей Герасимов и еще 24 общих контакта",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 13,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
                    },
                    "start": 0,
                    "length": 13,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 15,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAA6jDfQBhqai4KqsaAKkp2AiJob4_BNkOFk?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA6jDfQBhqai4KqsaAKkp2AiJob4_BNkOFk",
                    },
                    "start": 15,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 39,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 39,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/raphael-Dose-aa033a196?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/raphael-Dose-aa033a196?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:486191352",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Ilya Alpakov",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Ilya Alpakov ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Technical Lead – Akvelon, Inc.",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "cnFSaC9MSgypQh5xCZ5kHg==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C5603AQETlP-T2i6Inw/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1618585964915?e=1637798400&v=beta&t=r-xRsX4X0TRbz_e9qReqHNoI1IPXZAjxj9R30yDY9P8",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1618585964915?e=1637798400&v=beta&t=CJKoB5qgbP2hLCwf9CKV_65fLW0oETVLlazs9iVErvk",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1618585964915?e=1637798400&v=beta&t=vygyMVC68mvHxEwYC4XWiJKeiZpyU0ESZRzPpdQ4s9s",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1618585964915?e=1637798400&v=beta&t=OsxFuH7QNar5kLQ27j6npha2OLoqd-kiEtyyLMivfek",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Ilya Alpakov",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославская область, Россия",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Igor Berez, Evgeniy Kokonov и еще 33 общих контакта",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 37,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 37,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/ilya-Alpakov-8a09a8116?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/ilya-Alpakov-8a09a8116?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:278885613",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Daniil Fedulov",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Daniil Fedulov ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Data Scientist (Computer Vision), MSc in Applied Mathematics and Computer Science (Yaroslavl State University)",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "iAJxDyhOSSqe7jYHG6j4mQ==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C4D03AQHhjl-ZuOEOyw/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1564989890581?e=1637798400&v=beta&t=69wG7brvm7dqkNQ7Jibsdq0jbownSEpuvQ5tRlB7Exk",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1564989890581?e=1637798400&v=beta&t=LUAKdzOP5h435M6RBtzMkokNsNz9YKfxEm54RjHT3v0",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1564989890581?e=1637798400&v=beta&t=zEcdV3WpIwj86QpDwibRkj_o5IfM5aH3OI7Sp0b-aXM",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1564989890581?e=1637798400&v=beta&t=VrmKUDheEjKaWBnyILHaPKRKtvqha4nSgQXg_bRofr8",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Daniil Fedulov",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославская область, Россия",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Evgeniy Kokonov, Denis Golovko и еще 10 общих контактов",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 0,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 18,
                    "length": 13,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAABkMkcwBySYUxp2MxUo1EqEOgFQwLKSi0wY?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABkMkcwBySYUxp2MxUo1EqEOgFQwLKSi0wY",
                    },
                    "start": 18,
                    "length": 13,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 38,
                    "length": 18,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 38,
                    "length": 18,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/daniil-fedulov-17949479?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/daniil-fedulov-17949479?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:793855157",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Daniil Rodrigo",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Daniil Rodrigo ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Developer Engineer at Akvelon, Inc",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "iriM39lYTEyjP3enNTOe4g==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C4D03AQEW2b_mGVEVpg/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1580727374646?e=1637798400&v=beta&t=e2kS-Kn1fdreGXt92cL5c1AbTxyhnJfcd9XtJ-NKHqs",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1580727374646?e=1637798400&v=beta&t=yyLUuHRmicqolYK6tnrqX8qkKa1hIsYqejCLYm_qIYw",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1580727374646?e=1637798400&v=beta&t=t8ZDcLlpv9dA2-BHoqsyAAF5O-cKmZ3gNhdT_pLPhws",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1580727374646?e=1637798400&v=beta&t=uwDwlPS23mmZs9csoNjptteK-C2s2M5rAnyhdAJLxfs",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Daniil Rodrigo",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Агломерация Ярославля",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Igor Berez, Evgeniy Kokonov и еще 33 общих контакта",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 37,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 37,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/daniil-Rodrigo-b05a3a1a1?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/daniil-Rodrigo-b05a3a1a1?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:591347555",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Alexey Miller",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Alexey Miller ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Developer – EPAM Systems",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "S5aJwIoXQh6U1uIM0qfFkw==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C4D03AQF3H_jYtQ-8Iw/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1538773102907?e=1637798400&v=beta&t=_B5pM0GKCrH3vgqKWijxOTGBxuHiLdawaDrl2OEZ8QI",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1538773102907?e=1637798400&v=beta&t=rHLgiPnvHQx7eYYrVbgdlhQU0IeXni7pmuApu6N0Zlo",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1538773102907?e=1637798400&v=beta&t=R9l-MUUiWGkid5RMiQvEuKFnN_4Xn6hGhyfl52Z5rr0",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1538773102907?e=1637798400&v=beta&t=5Tna-G1BuO5lNm2L-XRKZ3xZ4AG_kplK3IHKfjQ4hu4",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Alexey Miller",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославская область, Россия",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Igor Berez, Evgeniy Kokonov и еще 21 общий контакт",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 37,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 37,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/alexey-Miller-02b05b146?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/alexey-Miller-02b05b146?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:858159838",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Maksim Lopez",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Maksim Lopez ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Development Engineer – EPAM Systems",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "e/QolCWNS+Kughyl59AUfw==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C5603AQEMzp1rEtbRXw/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1607022793983?e=1637798400&v=beta&t=7DtF_D0bdO-moWZ2zwwArVCoNZ1Mds3qKSPFr4TCkSA",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1607022793983?e=1637798400&v=beta&t=CD2Nm0eZk-85Ve2EJZBWTgoxu8zwijJIm7vA1i55ruQ",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1607022793983?e=1637798400&v=beta&t=eaFyXuRQuvMJe3EyjkbTC-Qg5z2vme5we-mBT7wKvdE",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1607022793983?e=1637798400&v=beta&t=8V0Vr_zdHB-sf6FWBNWhkthRyfY_6dIVYjhkwlc0nNw",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Maksim Lopez",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославль",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Igor Berez, Evgeniy Kokonov и еще 33 общих контакта",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 37,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 37,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/maksim-Lopez-33a4901bb?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/maksim-Lopez-33a4901bb?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:890198071",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Igor Averin",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Igor Averin ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Development Engineer at Akvelon, Inc.",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "NSZT/T4qRcmLXZuz06eNMw==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C4E03AQFJ9RBnG3LWLw/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1616432881648?e=1637798400&v=beta&t=VCbNth-yY-wC4NfvzKaTZkNZJqYCeVACzQvKpepOpg4",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1616432881648?e=1637798400&v=beta&t=tmOPpXPRiCKdF4YxSKvNzeflzOc63mMKkGJ0V0LSqAs",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1616432881648?e=1637798400&v=beta&t=ZdLJAkoPV-HaUrJEcKjujLG5jOGKpi0ye6Ycbuy5fLk",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1616432881648?e=1637798400&v=beta&t=JP5XPjWluLEbm1qehD2CxH5AG312v3wxmUiIopFtH5I",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Igor Averin",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославль",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Igor Berez, Evgeniy Kokonov и еще 38 общих контактов",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 37,
                    "length": 18,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 37,
                    "length": 18,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/igor-Averin-b0716020a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/igor-Averin-b0716020a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:241333979",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Daria Doe",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Daria Doe ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Engineer at Akvelon, Inc.",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "zan8fOraQZig2aSX67dwgw==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C4E03AQHQ2rc_UZ5-Eg/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1616521454141?e=1637798400&v=beta&t=6LkTSDp1-GKEJrng8IQmveS5z4NIvJ5VtUHNua1Siv4",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1616521454141?e=1637798400&v=beta&t=lB7Br_qeif_rtMoQqK-E01NP8z3zS79Mt_uzXOlv5ao",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1616521454141?e=1637798400&v=beta&t=7x_v7Ja0Q6i4u1ibPRLse7hMGM6iI-aGdiuIHWRMuhY",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1616521454141?e=1637798400&v=beta&t=cAyGX06uqIPrPwgRQ-woRPeg1UwFfslIor5-tWGjYQA",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Daria Doe",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославль",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Igor Berez, Evgeniy Kokonov и еще 36 общих контактов",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 37,
                    "length": 18,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 37,
                    "length": 18,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/daria-Doe-a4b9a468?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/daria-Doe-a4b9a468?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "entityUrn": "urn:li:fsd_feedbackCard:SRP_FEEDBACK_PEOPLE",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon1586130528",
        ],
        "trackingId": "O@©ÎAF£ÃÂñ0Ð¯ª",
        "$type": "com.linkedin.voyager.dash.search.FeedbackCard",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAChM3h8BrK-ilwQmbtNm0i3N9FYrQiTvbpw,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
    ],
  },
  status: 1,
  statusText: "string",
  headers: "any",
  config: {},
};

export const responseWithMutualRecruiters: AxiosResponse<unknown> =
{
  data: {
    "data": {
      "metadata": {
        "primaryResultType": "PEOPLE",
        "searchId": "0da529da-a97f-4975-ac63-ff2f14dff6a5",
        "filterAppliedCount": 0,
        "totalResultCount": 43,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.SearchClusterCollectionMetadata",
        ],
        "$type": "com.linkedin.voyager.dash.search.SearchClusterCollectionMetadata",
      },
      "entityUrn": "urn:li:collectionResponse:oeuEtcBuA8KprnHV/Nd2woN3xi1NrN62vYrOk7Qei2M=",
      "elements": [
        {
          "featureUnion": {
            "simpleText": {
              "textDirection": "USER_LOCALE",
              "text": "43 результата",
              "attributesV2": [],
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
              ],
              "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
            },
          },
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.SearchClusterViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.search.SearchClusterViewModel",
        },
        {
          "*results": [
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc,SEARCH_SRP,DEFAULT)",
            "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAChM3h8BrK-ilwQmbtNm0i3N9FYrQiTvbpw,SEARCH_SRP,DEFAULT)",
          ],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.SearchClusterViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.search.SearchClusterViewModel",
        },
        {
          "featureUnion": {
            "*feedbackCard": "urn:li:fsd_feedbackCard:SRP_FEEDBACK_PEOPLE",
          },
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.SearchClusterViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.search.SearchClusterViewModel",
        },
      ],
      "paging": {
        "total": 43,
        "start": 0,
        "count": 10,
        "links": [],
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.common.FullPaging",
        ],
        "$type": "com.linkedin.restli.common.CollectionMetadata",
      },
      "$type": "com.linkedin.restli.common.CollectionResponse",
    },
    "included": [
      {
        "entityUrn": "urn:li:fsd_profile:ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "entityUrn": "urn:li:fsd_profile:ACoAAChM3h8BrK-ilwQmbtNm0i3N9FYrQiTvbpw",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon587401631",
        ],
        "$type": "com.linkedin.voyager.dash.identity.profile.Profile",
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:836553026",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Irina Lopatina",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Irina Lopatina ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Development Engineer – Akvelon, Inc.",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "N4l9nTDESiaLRI6PfYp0XQ==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C5603AQENB_bxPZaZrA/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1596799748426?e=1637798400&v=beta&t=5vSjSR4gnu6T7Y8Ba710b2JzATFogwh5UgChclxg6x4",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1596799748426?e=1637798400&v=beta&t=2xKAtdCIBVHLTNZCTRIavfsxLxJIxygZ9SFw1b6FnT0",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1596799748426?e=1637798400&v=beta&t=mRj3d_A-7hkfPw4uGCAMTKqmz6ocGzlNB05Shpp1WrA",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1596799748426?e=1637798400&v=beta&t=vkXMQw1wDiZc89tiAy0JZKZgC5pzugs6BK9hXLWSLIA",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Irina Lopatina",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославль",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Evgeniy Kokonov, Daria Doe и еще 32 общих контакта",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 0,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 18,
                    "length": 13,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
                    },
                    "start": 18,
                    "length": 13,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 38,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 38,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/maksim-Martinez-4021b01b4?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/maksim-Martinez-4021b01b4?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:771211416",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Raphael Dose",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Raphael Dose ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Development Engineer",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "m4BWq5LDTcWYtnTBaeb4JA==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/D4E35AQHQri7DHZbdXA/profile-framedphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1630675173618?e=1632492000&v=beta&t=FCNxHutyE-IismHLGTtq-WDXaSdgeZjUW40Og1b1ooY",
                        "expiresAt": 1632492000000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1630675173618?e=1632492000&v=beta&t=3yPDRTXYf6yPLvkxuuIZvxk7XRLFwPBo87cVmojmYWI",
                        "expiresAt": 1632492000000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1630675173618?e=1632492000&v=beta&t=j5VHn7Z4nOO8p4Xp832AgYu_R9Gs2tArRcp-U3WVsRs",
                        "expiresAt": 1632492000000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1630675173618?e=1632492000&v=beta&t=kh83fC7GvzyWmjjq3bDaIRn5plsosw3-pSLsOiD-dwk",
                        "expiresAt": 1632492000000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Raphael Dose",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославль",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Daria Doe, Алексей Герасимов и еще 24 общих контакта",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 13,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
                    },
                    "start": 0,
                    "length": 13,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 15,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAA6jDfQBhqai4KqsaAKkp2AiJob4_BNkOFk?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA6jDfQBhqai4KqsaAKkp2AiJob4_BNkOFk",
                    },
                    "start": 15,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 39,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 39,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/raphael-Dose-aa033a196?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/raphael-Dose-aa033a196?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC33wJgB07LPHb-6yJnC8ySBd1Raoy_74jg",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:486191352",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Katerina Parfientieva",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Katerina Parfientieva ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Technical Lead – Akvelon, Inc.",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "cnFSaC9MSgypQh5xCZ5kHg==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C5603AQETlP-T2i6Inw/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1618585964915?e=1637798400&v=beta&t=r-xRsX4X0TRbz_e9qReqHNoI1IPXZAjxj9R30yDY9P8",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1618585964915?e=1637798400&v=beta&t=CJKoB5qgbP2hLCwf9CKV_65fLW0oETVLlazs9iVErvk",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1618585964915?e=1637798400&v=beta&t=vygyMVC68mvHxEwYC4XWiJKeiZpyU0ESZRzPpdQ4s9s",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1618585964915?e=1637798400&v=beta&t=OsxFuH7QNar5kLQ27j6npha2OLoqd-kiEtyyLMivfek",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Katerina Parfientieva",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославская область, Россия",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Igor Berez, Evgeniy Kokonov и еще 33 общих контакта",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 37,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 37,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/ilya-Alpakov-8a09a8116?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/ilya-Alpakov-8a09a8116?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:278885613",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Daniil Fedulov",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Daniil Fedulov ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Data Scientist (Computer Vision), MSc in Applied Mathematics and Computer Science (Yaroslavl State University)",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "iAJxDyhOSSqe7jYHG6j4mQ==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C4D03AQHhjl-ZuOEOyw/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1564989890581?e=1637798400&v=beta&t=69wG7brvm7dqkNQ7Jibsdq0jbownSEpuvQ5tRlB7Exk",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1564989890581?e=1637798400&v=beta&t=LUAKdzOP5h435M6RBtzMkokNsNz9YKfxEm54RjHT3v0",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1564989890581?e=1637798400&v=beta&t=zEcdV3WpIwj86QpDwibRkj_o5IfM5aH3OI7Sp0b-aXM",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1564989890581?e=1637798400&v=beta&t=VrmKUDheEjKaWBnyILHaPKRKtvqha4nSgQXg_bRofr8",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Daniil Fedulov",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославская область, Россия",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Evgeniy Kokonov, Denis Golovko и еще 10 общих контактов",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 0,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 18,
                    "length": 13,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAABkMkcwBySYUxp2MxUo1EqEOgFQwLKSi0wY?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABkMkcwBySYUxp2MxUo1EqEOgFQwLKSi0wY",
                    },
                    "start": 18,
                    "length": 13,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 38,
                    "length": 18,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 38,
                    "length": 18,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/daniil-fedulov-17949479?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/daniil-fedulov-17949479?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:793855157",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Daniil Rodrigo",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Daniil Rodrigo ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Developer Engineer at Akvelon, Inc",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "iriM39lYTEyjP3enNTOe4g==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C4D03AQEW2b_mGVEVpg/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1580727374646?e=1637798400&v=beta&t=e2kS-Kn1fdreGXt92cL5c1AbTxyhnJfcd9XtJ-NKHqs",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1580727374646?e=1637798400&v=beta&t=yyLUuHRmicqolYK6tnrqX8qkKa1hIsYqejCLYm_qIYw",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1580727374646?e=1637798400&v=beta&t=t8ZDcLlpv9dA2-BHoqsyAAF5O-cKmZ3gNhdT_pLPhws",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1580727374646?e=1637798400&v=beta&t=uwDwlPS23mmZs9csoNjptteK-C2s2M5rAnyhdAJLxfs",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Daniil Rodrigo",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Агломерация Ярославля",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Igor Berez, Evgeniy Kokonov и еще 33 общих контакта",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 37,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 37,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/daniil-Rodrigo-b05a3a1a1?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/daniil-Rodrigo-b05a3a1a1?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:591347555",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Alexey Miller",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Alexey Miller ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Developer – EPAM Systems",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "S5aJwIoXQh6U1uIM0qfFkw==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C4D03AQF3H_jYtQ-8Iw/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1538773102907?e=1637798400&v=beta&t=_B5pM0GKCrH3vgqKWijxOTGBxuHiLdawaDrl2OEZ8QI",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1538773102907?e=1637798400&v=beta&t=rHLgiPnvHQx7eYYrVbgdlhQU0IeXni7pmuApu6N0Zlo",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1538773102907?e=1637798400&v=beta&t=R9l-MUUiWGkid5RMiQvEuKFnN_4Xn6hGhyfl52Z5rr0",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1538773102907?e=1637798400&v=beta&t=5Tna-G1BuO5lNm2L-XRKZ3xZ4AG_kplK3IHKfjQ4hu4",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Alexey Miller",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославская область, Россия",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Igor Berez, Evgeniy Kokonov и еще 21 общий контакт",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 37,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 37,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/alexey-Miller-02b05b146?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/alexey-Miller-02b05b146?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:858159838",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Maksim Lopez",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Maksim Lopez ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Development Engineer – EPAM Systems",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "e/QolCWNS+Kughyl59AUfw==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C5603AQEMzp1rEtbRXw/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1607022793983?e=1637798400&v=beta&t=7DtF_D0bdO-moWZ2zwwArVCoNZ1Mds3qKSPFr4TCkSA",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1607022793983?e=1637798400&v=beta&t=CD2Nm0eZk-85Ve2EJZBWTgoxu8zwijJIm7vA1i55ruQ",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1607022793983?e=1637798400&v=beta&t=eaFyXuRQuvMJe3EyjkbTC-Qg5z2vme5we-mBT7wKvdE",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1607022793983?e=1637798400&v=beta&t=8V0Vr_zdHB-sf6FWBNWhkthRyfY_6dIVYjhkwlc0nNw",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Maksim Lopez",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославль",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Igor Berez, Evgeniy Kokonov и еще 33 общих контакта",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 37,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 37,
                    "length": 17,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/maksim-Lopez-33a4901bb?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/maksim-Lopez-33a4901bb?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:890198071",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Igor Averin",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Igor Averin ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Development Engineer at Akvelon, Inc.",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "NSZT/T4qRcmLXZuz06eNMw==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C4E03AQFJ9RBnG3LWLw/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1616432881648?e=1637798400&v=beta&t=VCbNth-yY-wC4NfvzKaTZkNZJqYCeVACzQvKpepOpg4",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1616432881648?e=1637798400&v=beta&t=tmOPpXPRiCKdF4YxSKvNzeflzOc63mMKkGJ0V0LSqAs",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1616432881648?e=1637798400&v=beta&t=ZdLJAkoPV-HaUrJEcKjujLG5jOGKpi0ye6Ycbuy5fLk",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1616432881648?e=1637798400&v=beta&t=JP5XPjWluLEbm1qehD2CxH5AG312v3wxmUiIopFtH5I",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Igor Averin",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославль",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Igor Berez, Evgeniy Kokonov и еще 38 общих контактов",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 37,
                    "length": 18,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 37,
                    "length": 18,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/igor-Averin-b0716020a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/igor-Averin-b0716020a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:241333979",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Daria Doe",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Daria Doe ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Software Engineer at Akvelon, Inc.",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "zan8fOraQZig2aSX67dwgw==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C4E03AQHQ2rc_UZ5-Eg/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1616521454141?e=1637798400&v=beta&t=6LkTSDp1-GKEJrng8IQmveS5z4NIvJ5VtUHNua1Siv4",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1616521454141?e=1637798400&v=beta&t=lB7Br_qeif_rtMoQqK-E01NP8z3zS79Mt_uzXOlv5ao",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1616521454141?e=1637798400&v=beta&t=7x_v7Ja0Q6i4u1ibPRLse7hMGM6iI-aGdiuIHWRMuhY",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1616521454141?e=1637798400&v=beta&t=cAyGX06uqIPrPwgRQ-woRPeg1UwFfslIor5-tWGjYQA",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Daria Doe",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославль",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Igor Berez, Evgeniy Kokonov и еще 36 общих контактов",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 37,
                    "length": 18,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 37,
                    "length": 18,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/daria-Doe-a4b9a468?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/daria-Doe-a4b9a468?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "template": null,
        "actorNavigationContext": null,
        "trackingUrn": "urn:li:member:634224179",
        "controlName": null,
        "primaryActions": null,
        "entityCustomTrackingInfo": {
          "memberDistance": "DISTANCE_1",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.search.EntityCustomTrackingInfo",
          ],
          "nameMatch": false,
          "$type": "com.linkedin.voyager.dash.search.EntityCustomTrackingInfo",
        },
        "title": {
          "textDirection": "FIRST_STRONG",
          "text": "Alexander Smith",
          "attributesV2": [],
          "accessibilityText": "См. профиль участника Alexander Smith ",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "overflowActions": null,
        "targetUnion": null,
        "*lazyLoadedActions": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAACXNfjMB_811mjUfuL7CKWsnYeDXBkKLCAI,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "searchActionType": null,
        "badgeIcon": null,
        "entityUrn": "urn:li:fsd_entityResultViewModel:(urn:li:fsd_profile:ACoAACXNfjMB_811mjUfuL7CKWsnYeDXBkKLCAI,SEARCH_SRP,DEFAULT)",
        "lazyLoadedActionsUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAACXNfjMB_811mjUfuL7CKWsnYeDXBkKLCAI,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "primarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Lead Full Stack Developer",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "badgeText": {
          "textDirection": "USER_LOCALE",
          "text": "• 1-й",
          "attributesV2": [],
          "accessibilityText": "Контакт 1-го уровня",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "trackingId": "4wpES11lRgmJ4MIlJymhXw==",
        "addEntityToSearchHistory": true,
        "actorNavigationUrl": null,
        "summary": null,
        "image": {
          "attributes": [
            {
              "detailDataUnion": {
                "nonEntityProfilePicture": {
                  "*profile": "urn:li:fsd_profile:ACoAACXNfjMB_811mjUfuL7CKWsnYeDXBkKLCAI",
                  "$recipeTypes": [
                    "com.linkedin.deco.recipe.anonymous.Anon584899856",
                  ],
                  "profileUrn": "urn:li:fsd_profile:ACoAACXNfjMB_811mjUfuL7CKWsnYeDXBkKLCAI",
                  "vectorImage": {
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution",
                    ],
                    "rootUrl": "https://media-exp1.licdn.com/dms/image/C4D03AQFpgWsLwkX4Pg/profile-displayphoto-shrink_",
                    "artifacts": [
                      {
                        "width": 100,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "100_100/0/1562420171674?e=1637798400&v=beta&t=dmRAZNOpauS70QAMbyS9IIptUfCBtYGip36cJaIgVsc",
                        "expiresAt": 1637798400000,
                        "height": 100,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 200,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "200_200/0/1562420171674?e=1637798400&v=beta&t=qWrn70wHqFc__Pn0M28QV2h_o4xIkIakCoknvuGO6ow",
                        "expiresAt": 1637798400000,
                        "height": 200,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 400,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "400_400/0/1562420171674?e=1637798400&v=beta&t=mQJJgS9FBhixmmGidyDjnRMXbL6MNNV92n9mWHPKpkE",
                        "expiresAt": 1637798400000,
                        "height": 400,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                      {
                        "width": 800,
                        "$recipeTypes": [
                          "com.linkedin.voyager.dash.deco.common.VectorArtifact",
                        ],
                        "fileIdentifyingUrlPathSegment": "800_800/0/1562420171674?e=1637798400&v=beta&t=kZysTLziOUFJ7a3tYQ2leIxamumSo_2mQsyKlpQCLOU",
                        "expiresAt": 1637798400000,
                        "height": 800,
                        "$type": "com.linkedin.common.VectorArtifact",
                      },
                    ],
                    "$type": "com.linkedin.common.VectorImage",
                  },
                  "$type": "com.linkedin.voyager.dash.common.image.NonEntityProfilePicture",
                },
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
              ],
              "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
            },
          ],
          "accessibilityText": "Alexander Smith",
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
          ],
          "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
        },
        "secondarySubtitle": {
          "textDirection": "USER_LOCALE",
          "text": "Ярославская область, Россия",
          "attributesV2": [],
          "$recipeTypes": [
            "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
          ],
          "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
        },
        "insights": [
          {
            "simpleInsight": {
              "searchActionType": "SEE_MUTUAL_CONNECTIONS",
              "image": {
                "attributes": [
                  {
                    "detailDataUnion": {
                      "icon": "IC_PEOPLE_16DP",
                    },
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.image.ImageAttribute",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.image.ImageAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.image.ImageViewModel",
                ],
                "$type": "com.linkedin.voyager.dash.common.image.ImageViewModel",
              },
              "title": {
                "textDirection": "USER_LOCALE",
                "text": "Igor Novikov, Evgeniy Kokuykin и еще 41 общий контакт",
                "attributesV2": [
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKGwdoBbzomvZLdvexbZvc5-Bz6ipNJqRA",
                    },
                    "start": 0,
                    "length": 12,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/in/ACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAzBdhQB-_fBxh8inLLbqfz9tdPYGMC8CZ0",
                    },
                    "start": 14,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "style": "BOLD",
                    },
                    "start": 37,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                  {
                    "detailDataUnion": {
                      "hyperlink": "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAACXNfjMB_811mjUfuL7CKWsnYeDXBkKLCAI%22%5D&origin=SHARED_CONNECTIONS_CANNED_SEARCH",
                    },
                    "start": 37,
                    "length": 16,
                    "$recipeTypes": [
                      "com.linkedin.voyager.dash.deco.common.text.TextAttributeV2",
                    ],
                    "$type": "com.linkedin.voyager.dash.common.text.TextAttribute",
                  },
                ],
                "$recipeTypes": [
                  "com.linkedin.voyager.dash.deco.common.text.TextViewModelV2",
                ],
                "$type": "com.linkedin.voyager.dash.common.text.TextViewModel",
              },
              "$recipeTypes": [
                "com.linkedin.voyager.dash.deco.search.SimpleInsight",
              ],
              "$type": "com.linkedin.voyager.dash.search.SimpleInsight",
            },
          },
        ],
        "navigationUrl": "https://www.linkedin.com/in/alexander-Smith-a6b497158?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACXNfjMB_811mjUfuL7CKWsnYeDXBkKLCAI",
        "entityEmbeddedObject": null,
        "$recipeTypes": [
          "com.linkedin.voyager.dash.deco.search.EntityResultViewModel",
        ],
        "$type": "com.linkedin.voyager.dash.search.EntityResultViewModel",
        "unreadIndicatorDetailsUnion": null,
        "actorTrackingUrn": null,
        "navigationContext": {
          "$recipeTypes": [
            "com.linkedin.deco.recipe.anonymous.Anon560024415",
          ],
          "url": "https://www.linkedin.com/in/alexander-Smith-a6b497158?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACXNfjMB_811mjUfuL7CKWsnYeDXBkKLCAI",
          "$type": "com.linkedin.voyager.dash.search.NavigationContext",
        },
      },
      {
        "entityUrn": "urn:li:fsd_feedbackCard:SRP_FEEDBACK_PEOPLE",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon1586130528",
        ],
        "trackingId": "O@©ÎAF£ÃÂñ0Ð¯ª",
        "$type": "com.linkedin.voyager.dash.search.FeedbackCard",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAC9RRLUBWtnIVwPoYQar8wE4KwHkBAyvG6Q,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADUPWDcBxY6E2QpX7Ie8xYh6YcRuXloVJmo,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAABz6sPgBlLeMzSC8OZE-7MQ3WdnuQIMpXCc,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAABCfdO0Bv6b8nYqHLqhe3l1Udk_lCXOfVVU,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAChM3h8BrK-ilwQmbtNm0i3N9FYrQiTvbpw,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAAA5idtsBVCvW7mLVWIeFBLKfw47J-V5xiC8,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAACM_P2MBdk60G-HZAUQzeFV3Tr1u3uB6iC4,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADHcyUIBpZZl2Q1L6qzmA_7JouIIoZEVX-U,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
      {
        "entityUrn": "urn:li:fsd_lazyLoadedActions:(urn:li:fsd_profileActions:(ACoAADMmet4BS4YCXxuevIXBi94SpfJYyXTP8NU,SEARCH,EMPTY_CONTEXT_ENTITY_URN),PEOPLE,SEARCH_SRP)",
        "$recipeTypes": [
          "com.linkedin.deco.recipe.anonymous.Anon803192845",
        ],
        "$type": "com.linkedin.voyager.dash.search.LazyLoadedActions",
      },
    ],
  },
  status: 1,
  statusText: "string",
  headers: "any",
  config: {},
};
