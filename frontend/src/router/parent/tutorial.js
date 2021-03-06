// ----------------- 부모 회원가입 라우팅 -------------------------
// 헤더 컴포넌트
import BackHeader from "../../components/common/headers/BackHeader";

// 페이지
import ParentTutorial from "../../views/parent/Tutorial";

// 컴포넌트
import ParentTutorialDanchoo from "../../components/parent/tutorial/TutorialDanchoo";
import ParentTutorialChildSync from "../../components/parent/tutorial/TutorialChildSync";
import ParentTutorialJob from "../../components/parent/tutorial/TutorialJob";
import ParentTutorialStock from "../../components/parent/tutorial/TutorialStock";

export default [
  {
    path: "/parent/tutorial/what-is-danchoo",
    components: {
      default: ParentTutorial,
      header: BackHeader,
    },
    props: {
      header: {
        pageTitle: "첫단추의 화폐, 단추",
        backBtnPath: "/parent/home",
      },
    },
    meta: {
      isParentPage: true,
    },
    children: [
      {
        path: ":id",
        component: ParentTutorialDanchoo,
      },
    ],
  },
  {
    path: "/parent/tutorial/child-sync",
    components: {
      default: ParentTutorial,
      header: BackHeader,
    },
    props: {
      header: {
        pageTitle: "자녀 계정 연결하기",
        backBtnPath: "/parent/home",
      },
    },
    meta: {
      isParentPage: true,
    },
    children: [
      {
        path: ":id",
        component: ParentTutorialChildSync,
      },
    ],
  },
  {
    path: "/parent/tutorial/job",
    components: {
      default: ParentTutorial,
      header: BackHeader,
    },
    props: {
      header: {
        pageTitle: "직업과 할 일",
        backBtnPath: "/parent/home",
      },
    },
    meta: {
      isParentPage: true,
    },
    children: [
      {
        path: ":id",
        component: ParentTutorialJob,
      },
    ],
  },
  {
    path: "/parent/tutorial/stock",
    components: {
      default: ParentTutorial,
      header: BackHeader,
    },
    props: {
      header: { pageTitle: "아이들을 위한 모의투자" },
    },
    meta: {
      isParentPage: true,
    },
    children: [
      {
        path: ":id",
        component: ParentTutorialStock,
      },
    ],
  },
];
