(async()=>{let o=document.querySelector(".kanban-update-item-sidebar"),e=document.querySelector(".kanban-wrapper"),t=document.querySelector(".comment-editor"),r=document.querySelector(".kanban-add-new-board"),n=[].slice.call(document.querySelectorAll(".kanban-add-board-input")),a=document.querySelector(".kanban-add-board-btn"),d=document.querySelector("#due-date"),i=$(".select2"),s=document.querySelector("html").getAttribute("data-assets-path"),l=new bootstrap.Offcanvas(o);function c(e){return e.id?"<div class='badge "+$(e.element).data("color")+"'> "+e.text+"</div>":e.text}(g=await fetch(s+"json/kanban.json")).ok||console.error("error",g),g=await g.json(),d&&d.flatpickr({monthSelectorType:"static",static:!0,altInput:!0,altFormat:"j F, Y",dateFormat:"Y-m-d"}),i.length&&i.each(function(){var e=$(this);e.wrap("<div class='position-relative'></div>").select2({placeholder:"Select Label",dropdownParent:e.parent(),templateResult:c,templateSelection:c,escapeMarkup:function(e){return e}})}),t&&new Quill(t,{modules:{toolbar:".comment-toolbar"},placeholder:"Write a Comment...",theme:"snow"});let b=()=>`
  <div class="dropdown">
      <i class="dropdown-toggle icon-base ti tabler-dots-vertical cursor-pointer"
         id="board-dropdown"
         data-bs-toggle="dropdown"
         aria-haspopup="true"
         aria-expanded="false">
      </i>
      <div class="dropdown-menu dropdown-menu-end" aria-labelledby="board-dropdown">
          <a class="dropdown-item delete-board" href="javascript:void(0)">
              <i class="icon-base ti tabler-trash icon-xs"></i>
              <span class="align-middle">Delete</span>
          </a>
          <a class="dropdown-item" href="javascript:void(0)">
              <i class="icon-base ti tabler-edit icon-xs"></i>
              <span class="align-middle">Rename</span>
          </a>
          <a class="dropdown-item" href="javascript:void(0)">
              <i class="icon-base ti tabler-archive icon-xs"></i>
              <span class="align-middle">Archive</span>
          </a>
      </div>
  </div>
`,m=()=>`
<div class="dropdown kanban-tasks-item-dropdown">
    <i class="dropdown-toggle icon-base ti tabler-dots-vertical"
       id="kanban-tasks-item-dropdown"
       data-bs-toggle="dropdown"
       aria-haspopup="true"
       aria-expanded="false">
    </i>
    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="kanban-tasks-item-dropdown">
        <a class="dropdown-item" href="javascript:void(0)">Copy task link</a>
        <a class="dropdown-item" href="javascript:void(0)">Duplicate task</a>
        <a class="dropdown-item delete-task" href="javascript:void(0)">Delete</a>
    </div>
</div>
`,u=(e="",t=!1,a="",r="",n="")=>{let d=t?" pull-up":"",o=a?"avatar-"+a:"",i=n?n.split(","):[];return e?e.split(",").map((e,t,a)=>{a=r&&t!==a.length-1?" me-"+r:"",t=i[t]||"";return`
            <div class="avatar ${o}${a} w-px-26 h-px-26"
                 data-bs-toggle="tooltip"
                 data-bs-placement="top"
                 title="${t}">
                <img src="${s}img/avatars/${e}"
                     alt="Avatar"
                     class="rounded-circle${d}">
            </div>
        `}).join(""):""},p=new jKanban({element:".kanban-wrapper",gutter:"12px",widthBoard:"250px",dragItems:!0,boards:g,dragBoards:!0,addItemButton:!0,buttonContent:"+ Add Item",itemAddOptions:{enabled:!0,content:"+ Add New Item",class:"kanban-title-button btn btn-default border-none",footer:!1},click:e=>{var t=e,a=(t.getAttribute("data-eid")?t.querySelector(".kanban-text"):t).textContent,r=t.getAttribute("data-due-date"),n=new Date,d=n.getFullYear(),r=r?r+", "+d:`${n.getDate()} ${n.toLocaleString("en",{month:"long"})}, `+d,n=t.getAttribute("data-badge-text"),d=t.getAttribute("data-assigned");l.show(),o.querySelector("#title").value=a,o.querySelector("#due-date").nextSibling.value=r,$(".kanban-update-item-sidebar").find(i).val(n).trigger("change"),o.querySelector(".assigned").innerHTML="",o.querySelector(".assigned").insertAdjacentHTML("afterbegin",u(d,!1,"xs","1",e.getAttribute("data-members"))+`
        <div class="avatar avatar-xs ms-1">
            <span class="avatar-initial rounded-circle bg-label-secondary">
                <i class="icon-base ti tabler-plus icon-xs text-heading"></i>
            </span>
        </div>`)},buttonClick:(e,a)=>{let r=document.createElement("form");r.setAttribute("class","new-item-form"),r.innerHTML=`
        <div class="mb-4">
            <textarea class="form-control add-new-item" rows="2" placeholder="Add Content" autofocus required></textarea>
        </div>
        <div class="mb-4">
            <button type="submit" class="btn btn-primary btn-sm me-3 waves-effect waves-light">Add</button>
            <button type="button" class="btn btn-label-secondary btn-sm cancel-add-item waves-effect waves-light">Cancel</button>
        </div>
      `,p.addForm(a,r),r.addEventListener("submit",e=>{e.preventDefault();var t=Array.from(document.querySelectorAll(`.kanban-board[data-id="${a}"] .kanban-item`));p.addElement(a,{title:`<span class="kanban-text">${e.target[0].value}</span>`,id:a+"-"+(t.length+1)}),Array.from(document.querySelectorAll(`.kanban-board[data-id="${a}"] .kanban-text`)).forEach(e=>{e.insertAdjacentHTML("beforebegin",m())}),Array.from(document.querySelectorAll(".kanban-item .kanban-tasks-item-dropdown")).forEach(e=>{e.addEventListener("click",e=>e.stopPropagation())}),Array.from(document.querySelectorAll(`.kanban-board[data-id="${a}"] .delete-task`)).forEach(t=>{t.addEventListener("click",()=>{var e=t.closest(".kanban-item").getAttribute("data-eid");p.removeElement(e)})}),r.remove()}),r.querySelector(".cancel-add-item").addEventListener("click",()=>r.remove())}}),v=(e&&new PerfectScrollbar(e),document.querySelector(".kanban-container"));var g=Array.from(document.querySelectorAll(".kanban-title-board")),f=Array.from(document.querySelectorAll(".kanban-item"));f.length&&f.forEach(e=>{var t,a,r=`<span class="kanban-text">${e.textContent}</span>`;let n="";e.getAttribute("data-image")&&(n=`
              <img class="img-fluid rounded mb-2"
                   src="${s}img/elements/${e.getAttribute("data-image")}">
          `),e.textContent="",e.getAttribute("data-badge")&&e.getAttribute("data-badge-text")&&e.insertAdjacentHTML("afterbegin",(t=e.getAttribute("data-badge"),a=e.getAttribute("data-badge-text"),`
<div class="d-flex justify-content-between flex-wrap align-items-center mb-2">
    <div class="item-badges">
        <div class="badge bg-label-${t}">${a}</div>
    </div>
    ${m()}
</div>
`+n+r)),(e.getAttribute("data-comments")||e.getAttribute("data-due-date")||e.getAttribute("data-assigned"))&&e.insertAdjacentHTML("beforeend",(t=e.getAttribute("data-attachments")||0,a=e.getAttribute("data-comments")||0,r=e.getAttribute("data-assigned")||"",e=e.getAttribute("data-members")||"",`
<div class="d-flex justify-content-between align-items-center flex-wrap mt-2">
    <div class="d-flex">
        <span class="d-flex align-items-center me-2">
            <i class="icon-base ti tabler-paperclip me-1"></i>
            <span class="attachments">${t}</span>
        </span>
        <span class="d-flex align-items-center ms-2">
            <i class="icon-base ti tabler-message-2 me-1"></i>
            <span>${a}</span>
        </span>
    </div>
    <div class="avatar-group d-flex align-items-center assigned-avatar">
        ${u(r,!0,"xs",null,e)}
    </div>
</div>
`))}),Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(e=>{new bootstrap.Tooltip(e)}),(f=Array.from(document.querySelectorAll(".kanban-tasks-item-dropdown"))).length&&f.forEach(e=>{e.addEventListener("click",e=>{e.stopPropagation()})}),a&&a.addEventListener("click",()=>{n.forEach(e=>{e.value="",e.classList.toggle("d-none")})}),v&&v.append(r),g&&g.forEach(e=>{e.addEventListener("mouseenter",()=>{e.contentEditable="true"}),e.insertAdjacentHTML("afterend",b())}),Array.from(document.querySelectorAll(".delete-board")).forEach(t=>{t.addEventListener("click",()=>{var e=t.closest(".kanban-board").getAttribute("data-id");p.removeBoard(e)})}),Array.from(document.querySelectorAll(".delete-task")).forEach(t=>{t.addEventListener("click",()=>{var e=t.closest(".kanban-item").getAttribute("data-eid");p.removeElement(e)})}),(f=document.querySelector(".kanban-add-board-cancel-btn"))&&f.addEventListener("click",()=>{n.forEach(e=>{e.classList.toggle("d-none")})}),r&&r.addEventListener("submit",e=>{e.preventDefault();var e=e.target.querySelector(".form-control").value.trim(),a=e.replace(/\s+/g,"-").toLowerCase(),a=(p.addBoards([{id:a,title:e}]),document.querySelector(".kanban-board:last-child"));if(a){let e=a.querySelector(".kanban-title-board"),t=(e.insertAdjacentHTML("afterend",b()),e.addEventListener("mouseenter",()=>{e.contentEditable="true"}),a.querySelector(".delete-board"));t&&t.addEventListener("click",()=>{var e=t.closest(".kanban-board").getAttribute("data-id");p.removeBoard(e)})}n.forEach(e=>{e.classList.add("d-none")}),v&&v.append(r)}),o.addEventListener("hidden.bs.offcanvas",()=>{var e=o.querySelector(".ql-editor").firstElementChild;e&&(e.innerHTML="")}),o&&o.addEventListener("shown.bs.offcanvas",()=>{Array.from(o.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(e=>{new bootstrap.Tooltip(e)})})})();