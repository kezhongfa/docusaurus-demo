import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
  if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
    console.log(
      "yyy:",
      window.__POWERED_BY_QIANKUN__,
      window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
    );
  }
}
