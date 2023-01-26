(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{139:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return b}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),c=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},f=function(e){var n=c(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(t),h=i,b=f["".concat(s,".").concat(h)]||f[h]||p[h]||r;return t?a.a.createElement(b,o(o({ref:n},d),{},{components:t})):a.a.createElement(b,o({ref:n},d))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=h;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=t[d];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));var i=t(2),a=t(6),r=(t(0),t(139)),s={title:"List of Events",description:"Alerts - Events",sidebar_label:"List of Events"},o={unversionedId:"alerts_events",id:"alerts_events",isDocsHomePage:!1,title:"List of Events",description:"Alerts - Events",source:"@site/docs/alerts_events.md",permalink:"/docs/docs/alerts_events",editUrl:"https://github.com/Leaf-Agriculture/docs/tree/master/docs/alerts_events.md",sidebar_label:"List of Events",sidebar:"docs",previous:{title:"Alerts Endpoints",permalink:"/docs/docs/alerts_endpoints"},next:{title:"Authentication Alerts",permalink:"/docs/docs/alerts_authentication"}},l=[{value:"About",id:"about",children:[]},{value:"Alert Events",id:"alert-events",children:[{value:"Webhook registered",id:"webhook-registered",children:[]}]},{value:"Credentials Alerts",id:"credentials-alerts",children:[{value:"Credentials Missing Permission",id:"credentials-missing-permission",children:[]},{value:"Credentials Unauthenticated",id:"credentials-unauthenticated",children:[]}]},{value:"Operation Events",id:"operation-events",children:[{value:"Uploaded File Processing Finished",id:"uploaded-file-processing-finished",children:[]},{value:"Uploaded File Processing Failed",id:"uploaded-file-processing-failed",children:[]},{value:"Provider File Processing Finished",id:"provider-file-processing-finished",children:[]},{value:"Provider File Processing Failed",id:"provider-file-processing-failed",children:[]},{value:"Merged File Processing Finished",id:"merged-file-processing-finished",children:[]},{value:"Merged File Processing Failed",id:"merged-file-processing-failed",children:[]},{value:"Automerged File Processing Finished",id:"automerged-file-processing-finished",children:[]},{value:"Automerged File Processing Failed",id:"automerged-file-processing-failed",children:[]},{value:"Operation created",id:"operation-created",children:[]},{value:"Operation updated",id:"operation-updated",children:[]},{value:"Operation Processing Finished",id:"operation-processing-finished",children:[]}]},{value:"Field Events",id:"field-events",children:[{value:"New Field",id:"new-field",children:[]}]},{value:"Field Boundary Events",id:"field-boundary-events",children:[{value:"Field Boundary Created",id:"field-boundary-created",children:[]},{value:"Field Boundary Updated",id:"field-boundary-updated",children:[]}]},{value:"Crop Monitoring Events",id:"crop-monitoring-events",children:[{value:"New Satellite Image",id:"new-satellite-image",children:[]}]},{value:"Machines (Beta) Events",id:"machines-beta-events",children:[{value:"New Machine",id:"new-machine",children:[]},{value:"Updated Machine",id:"updated-machine",children:[]},{value:"Deleted Machine",id:"deleted-machine",children:[]}]}],d={rightToc:l};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"about"},"About"),Object(r.b)("p",null,"This section describes all types of events generated by Leaf and their respective formats.\nThe types of events are grouped by the services that produce it."),Object(r.b)("h2",{id:"alert-events"},"Alert Events"),Object(r.b)("h3",{id:"webhook-registered"},"Webhook registered"),Object(r.b)("p",null,"When a new webhook is registered you will receive a one time success message in the below format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "message": "confirmation of webhook upon registration"\n}\n')),Object(r.b)("h2",{id:"credentials-alerts"},"Credentials Alerts"),Object(r.b)("h3",{id:"credentials-missing-permission"},"Credentials Missing Permission"),Object(r.b)("p",null,"Event for when the provided credentials don't have enough permissions to do the actions you are trying to."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "credential": "the client identification",\n  "provider": "the provider from the credential",\n  "credentialId": "the credential id",\n  "message": "message from the alert",\n  "status": "the new status of the credential",\n  "type": "credentialsLimitedPermission",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'"\n}\n')),Object(r.b)("h3",{id:"credentials-unauthenticated"},"Credentials Unauthenticated"),Object(r.b)("p",null,"Event for when the credentials are no longer valid."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "credential": "the client identification",\n  "provider": "the provider from the credential",\n  "credentialId": "the credential id",\n  "message": "message from the alert",\n  "status": "the new status of the credential",\n  "type": "credentialsUnauthenticated",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'"\n}\n')),Object(r.b)("h2",{id:"operation-events"},"Operation Events"),Object(r.b)("h3",{id:"uploaded-file-processing-finished"},"Uploaded File Processing Finished"),Object(r.b)("p",null,"Event for when all steps of the processing of a machine operations file that was uploaded\nto Leaf are finished. This event can be useful to trigger a procedure that fetches the file from the API.\nThis event can be used to activate a procedure that fetches the file from the api,\nsince processing the file may take some time."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fileId": "the id of the uploaded file",\n  "leafUserId": "the id of the file owner",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'",\n  "type": "uploadedFileProcessingFinished"\n}\n')),Object(r.b)("h3",{id:"uploaded-file-processing-failed"},"Uploaded File Processing Failed"),Object(r.b)("p",null,"Event for when the processing of an operations file that was uploaded to Leaf is finished\nbut failed in one or more of the processing steps. This event can be useful for identifying\nfiles that have failed and are no longer being processed."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fileId": "the id of the uploaded file",\n  "leafUserId": "the id of the file owner",\n  "message": "details of what happened. May be empty",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'",\n  "type": "uploadedFileProcessingFailed"\n}\n')),Object(r.b)("h3",{id:"provider-file-processing-finished"},"Provider File Processing Finished"),Object(r.b)("p",null,"Event for when the processing of an operations file from a provider\n(either uploaded to provider manually or via Wireless Data Transfer) has successfully finished\nprocessing. This event can be useful for identifying new files when they are available."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fileId": "the id of the uploaded file",\n  "leafUserId": "the id of the file owner",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'",\n  "type": "providerFileProcessingFinished"\n}\n')),Object(r.b)("h3",{id:"provider-file-processing-failed"},"Provider File Processing Failed"),Object(r.b)("p",null,"Event for when the processing of an operations file from a provider\n(either uploaded to provider manually or via Wireless Data Transfer) is finished\nprocessing but failed in one or more of the processing steps. This event can be useful for identifying\nfiles that have failed and are no longer being processed."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fileId": "the id of the uploaded file",\n  "leafUserId": "the id of the file owner",\n  "message": "details of what happened. May be empty",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'",\n  "type": "providerFileProcessingFailed"\n}\n')),Object(r.b)("h3",{id:"merged-file-processing-finished"},"Merged File Processing Finished"),Object(r.b)("p",null,"Event for when the processing of a merged operation file has successfully finished\nprocessing. This event can be useful for identifying new merged files when they are available."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fileId": "the id of the uploaded file",\n  "leafUserId": "the id of the file owner",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'",\n  "type": "mergedFileProcessingFinished"\n}\n')),Object(r.b)("h3",{id:"merged-file-processing-failed"},"Merged File Processing Failed"),Object(r.b)("p",null,"Event for when the processing of a merged operation file is finished\nprocessing but failed in one or more of the processing steps. This event can be useful for identifying\nmerged files that have failed and are no longer being processed."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fileId": "the id of the uploaded file",\n  "leafUserId": "the id of the file owner",\n  "message": "details of what happened. May be empty",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'",\n  "type": "mergedFileProcessingFailed"\n}\n')),Object(r.b)("h3",{id:"automerged-file-processing-finished"},"Automerged File Processing Finished"),Object(r.b)("p",null,"Event for when the processing of an automerged operation file has successfully finished\nprocessing. This event can be useful for identifying new automerged files when they are available."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fileId": "the id of the uploaded file",\n  "leafUserId": "the id of the file owner",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'",\n  "type": "automergedFileProcessingFinished"\n}\n')),Object(r.b)("h3",{id:"automerged-file-processing-failed"},"Automerged File Processing Failed"),Object(r.b)("p",null,"Event for when the processing of an automerged operation file is finished\nprocessing but failed in one or more of the processing steps. This event can be useful for identifying\nautomerged files that have failed and are no longer being processed."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fileId": "the id of the uploaded file",\n  "leafUserId": "the id of the file owner",\n  "message": "details of what happened. May be empty",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'",\n  "type": "automergedFileProcessingFailed"\n}\n')),Object(r.b)("h3",{id:"operation-created"},"Operation created"),Object(r.b)("p",null,"Event for when an operation is successfully created.\nThis event can be useful for identifying new operations when they are available."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "operationId": "the id of the operation created",\n  "leafUserId": "the id of the file owner",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'",\n  "type": "operationCreated"\n}\n')),Object(r.b)("h3",{id:"operation-updated"},"Operation updated"),Object(r.b)("p",null,"Event for when an operation has updated.\nThis event can be useful for identifying changes to operations."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "operationId": "the id of the operation uploaded",\n  "leafUserId": "the id of the file owner",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'",\n  "type": "operationUpdated"\n}\n')),Object(r.b)("h3",{id:"operation-processing-finished"},"Operation Processing Finished"),Object(r.b)("p",null,"Event when a Field Operation has successfully finished.\nThis event could be useful for fetching the resources of an operation such as images, summary and units."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "operationId": "the id of the operation uploaded",\n  "leafUserId": "the id of the file owner",\n  "type": "operationProcessingFinished",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'"\n}\n')),Object(r.b)("h2",{id:"field-events"},"Field Events"),Object(r.b)("h3",{id:"new-field"},"New Field"),Object(r.b)("p",null,"Event for when a new field is created either in a connected provider account or directly within Leaf. "),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "source": "SYNC",\n  "leafUserId": "the id of the file owner",\n  "fieldId": "the id of the created field",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'",\n  "type": "fieldCreated"\n}\n')),Object(r.b)("h2",{id:"field-boundary-events"},"Field Boundary Events"),Object(r.b)("h3",{id:"field-boundary-created"},"Field Boundary Created"),Object(r.b)("p",null,"Event for when a fieldBoundary is created."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "boundaryId": "the id of the created field boundary",\n  "leafUserId": "the id of the file owner",\n  "fieldId": "the field related to the created field boundary",\n  "type": "fieldBoundaryCreated",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'"\n}\n')),Object(r.b)("h3",{id:"field-boundary-updated"},"Field Boundary Updated"),Object(r.b)("p",null,"Event for when a fieldBoundary is updated."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "boundaryId": "the id of the updated field boundary",\n  "leafUserId": "the id of the file owner",\n  "fieldId": "the field related to the updated field boundary",\n  "type": "fieldBoundaryUpdated",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'"\n}\n')),Object(r.b)("h2",{id:"crop-monitoring-events"},"Crop Monitoring Events"),Object(r.b)("h3",{id:"new-satellite-image"},"New Satellite Image"),Object(r.b)("p",null,"This event happens when we finish processing a new satellite image for a monitored field.\nIt can be useful for searching only the new and latest images available in our API."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "externalId": "the external id of the monitored field",\n  "processId": "the id of the process containing new images",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'",\n  "type": "newSatelliteImage"\n}\n')),Object(r.b)("h2",{id:"machines-beta-events"},"Machines (Beta) Events"),Object(r.b)("h3",{id:"new-machine"},"New Machine"),Object(r.b)("p",null,"This event happens when a new machine is created, either from operations files, or from provider data sync, or created by the user."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "machineCreated",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'",\n  "machineId": "the id of the new machine",\n  "leafUserId": "the id of the file owner",\n}\n')),Object(r.b)("h3",{id:"updated-machine"},"Updated Machine"),Object(r.b)("p",null,"This event happens when a machine is updated, either from operations files, or from provider data sync, or by the user."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "machineUpdated",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'",\n  "machineId": "the id of the machine uploaded",\n  "leafUserId": "the id of the file owner",\n}\n')),Object(r.b)("h3",{id:"deleted-machine"},"Deleted Machine"),Object(r.b)("p",null,"This event happens when a machine is deleted by the user."),Object(r.b)("p",null,"Alerts for this event are in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "machineDeleted",\n  "timestamp": "yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'",\n  "machineId": "the id of the machine deleted",\n  "leafUserId": "the id of the file owner",\n}\n')))}c.isMDXComponent=!0}}]);