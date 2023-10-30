// function getQueryParam(parameterName) {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get(parameterName);
// }

// const profileId = getQueryParam("profile");

// if (profileId) {
//   const apiUrl = `https://api.resumebuild.in/api/candidate/web-profile/${profileId}`;

//   fetch(apiUrl)
//   .then(response => response.json())
//   .then(item =>{
    
    
//     let res = item?.data

//     const videoQuestions = res?.video_questions?.filter((question) => question?.video !== null);
  
//     let myVideos = "";

 
//    videoQuestions?.forEach((element) => {
//     myVideos =
//       myVideos +
//       `
//       <div>
//       <h2 class="text-base">${element?.question?.question}</h2>
//       <a href=${element?.video} class="text-sm">Answer</a>
//     </div>
       

//         `;
//   });

//   let videoProfileHtml = "";

//   if (videoQuestions?.length !== 0) {
//     videoProfileHtml = `
//     <div class="px-4">
//       <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">Video Profile</h1>
//       <div class="flex gap-x-3">
//         ${myVideos}
//       </div>
//     </div>
//   `;
//   }

//   let myEducation = "";

//   res?. eductaions?.forEach((element) => {
//     myEducation =
//       myEducation +
//       `
//       <div class="mt-1 p-1.5 rounded">
//       <div></div>
//       <h3 class="text-lg font-medium">${element?.university}</h3>
//       <p class="text-base text-gray-600">
//       ${element?.course}
//       </p>
//       <p class="text-sm text-gray-600">${element?.start_date}-${
//         element?.is_current ? "Currently studying" : element?.end_date
//       }</p>
//     </div>
       

//         `;
//   });
//   let educationHtml = "";

//   if ( res?.eductaions?.length !== 0) {
//     educationHtml = `
//   <div class="px-2">
//   <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">Education</h1>
//   <div>
// ${myEducation}
//   </div>
// </div>
//   `;
//   }

//   let myProjects = "";

//   res?.projects?.forEach((element) => {
//     myProjects =
//       myProjects +
//       `
//       <div class="mt-1 p-1.5 text-justify">
//       <h3 class="text-base text-black font-semibold">${element?.title}</h3>
//       <div class="flex justify-between">
//         <p class="text-base text-black">${element?.link}</p>
//         <p class="text-base text-black">${element?.start_date}-${element?.end_date}</p>
//       </div>
//       <p class="text-sm w-80% text-black font-medium">
//         ${element?.description}
//       </p>
//     </div>
      

//         `;
//   });
//   let projectHtml = "";

//   if (res?.projects?.length !== 0) {
//     projectHtml = `
//   <div class="px-2">
//           <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">Projects</h1>
//           <div>
//            ${myProjects}
//           </div>
//         </div>
//   `;
//   }

//   let myExperience = "";

//   res?.experiences?.forEach((element) => {
//     myExperience =
//       myExperience +
//       `
      
//       <div class="mt-1 p-1.5 text-justify">
//       <h3 class="text-base text-black font-semibold">${
//         element?.company_name
//       }</h3>
//       <div class="flex justify-between">
//         <p class="text-base text-black">${element?.designation}</p>
//         <p class="text-base text-black">${element?.start_date}-${
//         element?.is_current ? "Present" : element?.end_date
//       }</p>
//       </div>
//       <p class="text-sm w-80% text-black font-medium">
//       ${element?.description}
        
//       </p>
//     </div>
       
//         `;
//   });
//   let experienceHtml = "";

//   if (res?.experiences?.length !== 0) {
//     experienceHtml = `
//     <div class="px-2">
//     <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">Work Experience</h1>
//     <div>
  
//    ${myExperience}
//     </div>
//   </div>
//   `;
//   }
//   let mySocial = "";

//   res?.social_links?.forEach((element) => {
//     mySocial =
//       mySocial +
//       `
//       <a class="px-2" href=${element?.link}
//       >${element?.name}</a
//     >

//         `;
//   });

//   let socialHtml = "";

//   if (res?.social_links?.length !== 0) {
//     socialHtml  = `
//     <h3>
//              ${mySocial}
//             </h3>
//   `;
//   }

//   let myLanguage = "";

//   res?.languages?.forEach((element) => {
//     myLanguage =
//       myLanguage +
//       `
//       <div class="mt-1 flex gap-x-4 px-2">
//       <p class="text-base">${element?.language}</p>
//     </div>
    
   
    

//         `;
//   });
//   let languageHtml = "";

//   if (res?.languages?.length !== 0) {
//     languageHtml  = `
//     <div class="px-2">
//           <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">Languages</h1>
//           <div class="flex gap-x-4">
//            ${myLanguage}
//           </div>
//         </div>
//   `;
//   }

//   let myInterests = "";

//   res?.interests?.forEach((element) => {
//     myInterests =
//       myInterests +
//       `
        
     
//     <p class="te xt-sm px-2">${element?.interest}</p>

 
    

//         `;
//   });

//   let interestHtml = "";

//   if (res?.interests?.length !== 0) {
//     interestHtml  = `
//     <div class="px-2">
//           <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">Interests</h1>
//           <div class="flex gap-x-3">
//         ${myInterests}
//           </div>
//         </div>
//   `;
//   }

//   let mySkills = res?.skills
//     ?.map((item) => {
//       return ` <p
//       class="text-sm  text-black font-semibold p-2 w-fit "
//     >
//     ${item?.skill}
    
//     </p>
     
//       `;
//     })
//     ?.join("");
//     let skillHtml = "";

//     if (res?.skills?.length !== 0) {
//       skillHtml  = `
//       <div class="px-2">
//       <h1 class="font-semibold uppercase text-xl mt-3 text-gray-700">
//         Skills
//       </h1>
//       <div class="flex gap-x-2.5 flex-warp mt-2.5">
//        ${mySkills}
       
//       </div>
//     </div>
//     `;
//     }

//   let myCertificate = res?.certification
//     ?.map((item) => {
//       return `
//       <li>${item?.certificate}</li>
      
//       `;
//     })
//     ?.join("");

//     let certificateHtml = "";

//     if (res?.certification?.length !== 0) {
//       certificateHtml  = `
//       <div class="px-2">
//       <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">Certification</h1>
//       <div>
//         <ul class="list-disc flex gap-x-1 list-inside">
//       ${myCertificate}
//         </ul>
//       </div>
//     </div>
//     `;
//     }

//     const dynamicContent = document.getElementById("dynamic-content");
//     dynamicContent.innerHTML = `<div class="main-container bg-white">
//         <!-- header -->
//         <div class="px-2">
//           <header class="flex justify-start gap-x-6 items-center">
//             <div>
//               <h1 class="font-semibold text-2xl">${res?.full_name}</h1>
//               <h3 class="font-medium text-gray-700 text-lg">${res?.position}</h3>
//               <p class="font-medium text-base">
//                 ${res?.summary}
//                 websites.
//               </p>
//             </div>
//           </header>
//         </div>
//         <!-- contact -->
//         <div>
//           <section
//             class="flex bg-gray-700 font-semibold text-sm mt-2.5 text-white justify-around items-center"
//           >
//             <h3>${res?.email}</h3>
//             <h3>${res?.mobile_no}</h3>
//             <h3>${res?.address}</h3>
//            ${socialHtml}
//           </section>
//         </div>
//         <!-- skill -->
//      ${skillHtml}
//         <!--work exp  -->
//       ${experienceHtml}
//         <!-- Projects -->
//       ${projectHtml}
//         <!-- education -->
//       ${educationHtml}
//         <!-- language -->
//        ${languageHtml}
//         <!-- certificate  -->
//       ${certificateHtml}
//         <!--interest  -->
//        ${interestHtml}
//         <!-- video profile  -->
//       ${videoProfileHtml}
        
//       </div>

// `;
//   })
//   .catch((error) => {
//     console.log("API request error:", error);
//   });
// } else {
//     // Handle the case when 'profile' parameter is not present
//     console.error("Profile parameter is missing from the URL.");
//   }
