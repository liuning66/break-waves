// 活动管理进行中活动表头
export const activeManagementTableColums = [
  {
    customSlot: "select", // 自定义列
  },
  //   {
  //     slot: "img", // 自定义列
  //   },
  {
    label: "图片",
    prop: "enterpriseLogo",
    slot: "img"
  },
  {
    label: "活动标题",
    prop: "title",
  },
  {
    label: "活动时间",
    prop: "gameTimes",
    sortable: true,
  },
  {
    label: "活动类型",
    prop: "gameTypeDesc",
  },
  {
    label: "活动创建人",
    prop: "gameCreator",
    width: 100,
  },
  {
    label: "活动状态",
    prop: "gameStatus",
    width: 100,
    sortable: true,
  },
  {
    slot: "gameStatusDesc",
  },
  {slot: "operate"}, // 自定义列
];
