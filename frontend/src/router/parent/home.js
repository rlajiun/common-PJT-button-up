// ----------------- 부모 홈 페이지 라우팅 -------------------------
// 헤더 컴포넌트
import GreetingHeader from "../../components/common/headers/GreetingHeader";
import BackHeader from "../../components/common/headers/BackHeader";

// 바텀 네비게이션
import BottomNav from "../../components/common/BottomNav";

// 페이지
import ParentHome from "../../views/parent/home/Home";
import ChlidInfo from "../../views/parent/home/ChildInfo";
import InvestManage from "../../views/parent/activity/InvestManage.vue";
import JobManager from "../../views/parent/activity/JobManage";

export default [
  {
    path: "/parent/home",
    name: "ParentHome",
    components: {
      default: ParentHome,
      header: GreetingHeader,
      footer: BottomNav,
    },
    meta: {
      isParentPage: true,
    },
  },
  {
    path: "/parent/home/child-info",
    name: "ChlidInfo",
    components: {
      default: ChlidInfo,
      header: BackHeader,
      footer: BottomNav,
    },
    props: {
      header: {
        backBtnPath: "/parent/home",
      },
      default: true,
    },
    meta: {
      isParentPage: true,
    },
  },
  {
    path: "/parent/todo/invest",
    name: "TodoInvest",
    components: {
      default: InvestManage,
      header: BackHeader,
      footer: BottomNav,
    },
    props: {
      header: {
        backBtnPath: "/parent/home",
      },
    },
    meta: {
      isParentPage: true,
    },
  },
  {
    path: "/parent/home/job",
    name: "JobInvest",
    components: {
      default: JobManager,
      header: BackHeader,
      footer: BottomNav,
    },
    props: {
      header: {
        backBtnPath: "/parent/home",
      },
    },
    meta: {
      isParentPage: true,
    },
  },
];
