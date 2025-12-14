document.addEventListener("DOMContentLoaded",function(e){let a,r,t,o;a=config.colors.textMuted,r=config.colors.headingColor,t=config.colors.borderColor,o=config.fontFamily;var s={donut:{series1:"color-mix(in sRGB, "+config.colors.success+" 80%, "+config.colors.black+")",series2:"color-mix(in sRGB, "+config.colors.success+" 90%, "+config.colors.black+")",series3:config.colors.success,series4:"color-mix(in sRGB, "+config.colors.success+" 80%, "+config.colors.cardColor+")",series5:"color-mix(in sRGB, "+config.colors.success+" 60%, "+config.colors.cardColor+")",series6:"color-mix(in sRGB, "+config.colors.success+" 40%, "+config.colors.cardColor+")"}},n=document.querySelector("#leadsReportChart"),s={chart:{height:170,width:150,parentHeightOffset:0,type:"donut"},labels:["36h","56h","16h","32h","56h","16h"],series:[23,35,10,20,35,23],colors:[s.donut.series1,s.donut.series2,s.donut.series3,s.donut.series4,s.donut.series5,s.donut.series6],stroke:{width:0},dataLabels:{enabled:!1,formatter:function(e,a){return parseInt(e)+"%"}},legend:{show:!1},tooltip:{theme:!1},grid:{padding:{top:0}},plotOptions:{pie:{donut:{size:"70%",labels:{show:!0,value:{fontSize:"1.125rem",fontFamily:o,color:r,fontWeight:500,offsetY:-20,formatter:function(e){return parseInt(e)+"%"}},name:{offsetY:20,fontFamily:o},total:{show:!0,fontSize:".9375rem",label:"Total",color:a,formatter:function(e){return"231h"}}}}}}};null!==n&&new ApexCharts(n,s).render();let i=document.querySelector("#horizontalBarChart"),l={chart:{height:300,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,barHeight:"60%",distributed:!0,startingShape:"rounded",borderRadiusApplication:"end",borderRadius:7}},grid:{strokeDashArray:10,borderColor:t,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-35,bottom:-12}},colors:[config.colors.primary,config.colors.info,config.colors.success,config.colors.secondary,config.colors.danger,config.colors.warning],fill:{opacity:[1,1,1,1,1,1]},dataLabels:{enabled:!0,style:{colors:[config.colors.white],fontWeight:400,fontSize:"13px",fontFamily:o},formatter:function(e,a){return l.labels[a.dataPointIndex]},offsetX:0,dropShadow:{enabled:!1}},labels:["UI Design","UX Design","Music","Animation","React","SEO"],series:[{data:[35,20,14,12,10,9]}],xaxis:{categories:["6","5","4","3","2","1"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:a,fontFamily:o,fontSize:"13px"},formatter:function(e){return e+"%"}}},yaxis:{max:35,labels:{style:{colors:[a],fontFamily:o,fontSize:"13px"}}},tooltip:{enabled:!0,style:{fontSize:"12px"},onDatasetHover:{highlightDataSeries:!1},custom:function({series:e,seriesIndex:a,dataPointIndex:t}){return'<div class="px-3 py-2"><span>'+e[a][t]+"%</span></div>"}},legend:{show:!1}};null!==i&&new ApexCharts(i,l).render();n=document.querySelectorAll(".chart-progress");n&&n.forEach(function(e){var a=config.colors[e.dataset.color],t=e.dataset.series,s=e.dataset.progress_variant,a=(a=a,t=t,{chart:{height:"true"==(s=s)?58:48,width:"true"==s?58:38,type:"radialBar"},plotOptions:{radialBar:{hollow:{size:"true"==s?"50%":"25%"},dataLabels:{show:"true"==s,value:{offsetY:-10,fontSize:"15px",fontWeight:500,fontFamily:o,color:r}},track:{background:config.colors_label.secondary}}},stroke:{lineCap:"round"},colors:[a],grid:{padding:{top:"true"==s?-12:-15,bottom:"true"==s?-17:-15,left:"true"==s?-17:-5,right:-15}},series:[t],labels:"true"==s?[""]:["Progress"]});new ApexCharts(e,a).render()});let c=document.querySelector(".datatables-academy-course"),d={angular:'<span class="badge bg-label-danger rounded p-1_5"><i class="icon-base ti tabler-brand-angular icon-28px"></i></span>',figma:'<span class="badge bg-label-warning rounded p-1_5"><i class="icon-base ti tabler-brand-figma icon-28px"></i></span>',react:'<span class="badge bg-label-info rounded p-1_5"><i class="icon-base ti tabler-brand-react icon-28px"></i></span>',art:'<span class="badge bg-label-success rounded p-1_5"><i class="icon-base ti tabler-color-swatch icon-28px"></i></span>',fundamentals:'<span class="badge bg-label-primary rounded p-1_5"><i class="icon-base ti tabler-diamond icon-28px"></i></span>'};c&&((s=document.createElement("h5")).classList.add("card-title","mb-0","text-nowrap","text-md-start","text-center"),s.innerHTML="Course you are taking",new DataTable(c,{ajax:assetsPath+"json/app-academy-dashboard.json",columns:[{data:"id"},{data:"id",orderable:!1,render:DataTable.render.select()},{data:"course name"},{data:"time"},{data:"progress"},{data:"status"}],columnDefs:[{className:"control",searchable:!1,orderable:!1,responsivePriority:2,targets:0,render:function(e,a,t,s){return""}},{targets:1,orderable:!1,searchable:!1,responsivePriority:3,checkboxes:!0,checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'},render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'}},{targets:2,responsivePriority:2,render:(e,a,t)=>{let{logo:s,course:r,user:o,image:n}=t;t=n?`<img src="${assetsPath}img/avatars/${n}" alt="Avatar" class="rounded-circle">`:`<span class="avatar-initial rounded-circle bg-label-${(t=["success","danger","warning","info","dark","primary","secondary"])[Math.floor(Math.random()*t.length)]}">${(o.match(/\b\w/g)||[]).reduce((e,a)=>e+a.toUpperCase(),"")}</span>`;return`
                  <div class="d-flex align-items-center">
                      <span class="me-4">${d[s]}</span>
                      <div>
                          <a class="text-heading text-truncate fw-medium mb-2 text-wrap" href="app-academy-course-details.html">
                              ${r}
                          </a>
                          <div class="d-flex align-items-center mt-1">
                              <div class="avatar-wrapper me-2">
                                  <div class="avatar avatar-xs">
                                      ${t}
                                  </div>
                              </div>
                              <small class="text-nowrap text-heading">${o}</small>
                          </div>
                      </div>
                  </div>
              `}},{targets:3,responsivePriority:3,render:e=>{var e=moment.duration(e),a=Math.floor(e.asHours());return`<span class="fw-medium text-nowrap text-heading">${a+`h ${Math.floor(e.asMinutes())-60*a}m`}</span>`}},{targets:4,render:(e,a,t)=>{var{status:t,number:s}=t;return`
                  <div class="d-flex align-items-center gap-3">
                      <p class="fw-medium mb-0 text-heading">${t}</p>
                      <div class="progress w-100" style="height: 8px;">
                          <div
                              class="progress-bar"
                              style="width: ${t}"
                              aria-valuenow="${t}"
                              aria-valuemin="0"
                              aria-valuemax="100">
                          </div>
                      </div>
                      <small>${s}</small>
                  </div>
              `}},{targets:5,render:(e,a,t)=>{var{user_number:t,note:s,view:r}=t;return`
                  <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                          <i class="icon-base ti tabler-users icon-lg me-1_5 text-primary"></i>
                          <span>${t}</span>
                      </div>
                      <div class="d-flex align-items-center">
                          <i class="icon-base ti tabler-book icon-lg me-1_5 text-info"></i>
                          <span>${s}</span>
                      </div>
                      <div class="d-flex align-items-center">
                          <i class="icon-base ti tabler-video icon-lg me-1_5 text-danger"></i>
                          <span>${r}</span>
                      </div>
                  </div>
              `}}],select:{style:"multi",selector:"td:nth-child(2)"},order:[[2,"desc"]],layout:{topStart:{rowClass:"row card-header border-bottom mx-0 px-3 py-0",features:[s]},topEnd:{search:{placeholder:"Search Course",text:"_INPUT_"}},bottomStart:{rowClass:"row mx-3 justify-content-between",features:["info"]},bottomEnd:"paging"},lengthMenu:[5],language:{paginate:{next:'<i class="icon-base ti tabler-chevron-right scaleX-n1-rtl icon-18px"></i>',previous:'<i class="icon-base ti tabler-chevron-left scaleX-n1-rtl icon-18px"></i>',first:'<i class="icon-base ti tabler-chevrons-left scaleX-n1-rtl icon-18px"></i>',last:'<i class="icon-base ti tabler-chevrons-right scaleX-n1-rtl icon-18px"></i>'}},responsive:{details:{display:DataTable.Responsive.display.modal({header:function(e){return"Details of "+e.data().order}}),type:"column",renderer:function(e,a,t){var s,r,o,t=t.map(function(e){return""!==e.title?`<tr data-dt-row="${e.rowIndex}" data-dt-column="${e.columnIndex}">
                      <td>${e.title}:</td>
                      <td>${e.data}</td>
                    </tr>`:""}).join("");return!!t&&((s=document.createElement("div")).classList.add("table-responsive"),r=document.createElement("table"),s.appendChild(r),r.classList.add("table"),r.classList.add("datatables-basic"),(o=document.createElement("tbody")).innerHTML=t,r.appendChild(o),s)}}}})),setTimeout(()=>{[{selector:".dt-search .form-control",classToRemove:"form-control-sm"},{selector:".dt-length .form-select",classToRemove:"form-select-sm"},{selector:".dt-layout-table",classToRemove:"row mt-2"},{selector:".dt-layout-full",classToRemove:"col-md col-12",classToAdd:"table-responsive"}].forEach(({selector:e,classToRemove:t,classToAdd:s})=>{document.querySelectorAll(e).forEach(a=>{t.split(" ").forEach(e=>a.classList.remove(e)),s&&a.classList.add(s)})})},100)});