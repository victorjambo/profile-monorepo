function _0x39426c(p) {
  function s(p) {
    if ("string" == typeof p)
      return function (p) {}.constructor("while (true) {}").apply("counter");
    1 !== ("" + p / p).length || p % 20 == 0
      ? function () {
          return !0;
        }
          .constructor("debugger")
          .call("action")
      : function () {
          return !1;
        }
          .constructor("debugger")
          .apply("stateObject"),
      s(++p);
  }
  try {
    if (p) return s;
    s(0);
  } catch (p) {}
}
setInterval(function () {
  _0x39426c();
}, 4e3);
console.log("Simple script to block debugger. Check source code in github.");
