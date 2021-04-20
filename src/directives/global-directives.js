/**
 * 全局指令
 *
 * @autor ln
 * @date 2021/4/20
 */
import Vue from "vue";

Vue.directive("drag", {
  bind(el) {
    const headerEl = el.querySelector(".el-dialog__header");
    const dragDom = el.querySelector(".el-dialog");
    dragDom.style.userSelect = "none";
    headerEl.style.cursor = "move";
    headerEl.onmousedown = e => {
      const originX = e.clientX;
      const originY = e.clientY;
      let dragDomOriginX, dragDomOriginY;
      const dragDomStyle = dragDom.currentStyle || window.getComputedStyle(dragDom, null);
      const {left: dragDomLeft, top: dragDomTop} = dragDomStyle;
      if (dragDomLeft.includes("%")) {
        dragDomOriginX = document.body.clientWidth * ((+dragDomLeft.replace(/%/g, '')) / 100);
        dragDomOriginY = document.body.clientHeight * ((+dragDomTop.replace(/%/g, '')) / 100);
      } else {
        dragDomOriginX = +(dragDomLeft.replace(/px/g, ''));
        dragDomOriginY = +(dragDomTop.replace(/px/g, ''));
      }

      document.onmousemove = e => {
        const disX = e.clientX - originX;
        const disY = e.clientY - originY;
        dragDom.style.left = (dragDomOriginX + disX) + 'px';
        dragDom.style.top = (dragDomOriginY + disY) + 'px';
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      }
    }
  }
});
