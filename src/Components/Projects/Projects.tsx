// import Section from "../Section/Section";
// import img1 from "../../assets/images/projects/hensard.png";
// import cwai from "../../assets/images/projects/cwai.png";
// import pickups from "../../assets/images/projects/pickups.png";
// import srm from "../../assets/images/projects/srm.png";
import NewProjects from "../NewProjects/Projects";
const OurProjectComponent = () => {
  // Function to handle the button click event and open the website
  // const openWebsite = (url: string) => {
  //   window.open(url, "_blank"); // Opens the provided URL in a new tab
  // };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <NewProjects />
      {/* 
      <Section
        title="Hensard University: A University website owned by former governor of Bayelsa State, Senator Henry Seriake Dickson"
        description="Hensard University provides innovative e-learning solutions designed to enhance the educational experience for students and faculty. 
        The website offers a user-friendly platform for online learning, course management, and student engagement. 
        Launched in January 2024, it aims to bridge the educational gap by making quality education accessible to all, especially in underrepresented regions."
        buttonText="Open Web"
        imgSrc={img1}
        status="Production" // Set the status to 'Production'
        onButtonClick={() => openWebsite("https://hensarduniversity.edu.ng/")} // Pass the website URL for Hensard University
      />


      <Section
        title="Touchpfy: A CRM for Businesses"
        description="Touchpfy is a cutting-edge customer relationship management (CRM) platform designed to help businesses optimize their customer service operations. 
        It provides businesses with the tools needed to engage, track, and manage customer interactions seamlessly. 
        The CRM solution integrates sales, marketing, and customer support into one comprehensive system, boosting productivity and improving customer satisfaction. 
        Whether you're a small startup or a large enterprise, Touchpfy helps businesses of all sizes improve their relationship with customers and enhance their operational efficiency."
        buttonText="Open Web"
        imgSrc={srm} // Replace with an image related to Touchpfy if available
        status="Testing"
        onButtonClick={() => openWebsite("https://touchpfy.com/")} // Pass the website URL for Touchpfy
        reverse={true}
        ctaBgColor="#FF7D13"
      />

     <Section
        title="Chatwazobia AI: AI Chat & Games"
        description="Chatwazobia AI is an advanced platform that integrates AI-powered chat and translation services with an innovative Games AI feature. 
        It allows users to engage in natural conversations with an intelligent virtual assistant, receive real-time translations in multiple languages, and enjoy personalized gaming experiences. 
        The AI-powered chat feature assists users with various tasks like customer support, general inquiries, and providing relevant information. 
        In addition, the platform’s Games AI adapts to players’ behavior and preferences, offering a dynamic and customized gaming experience that evolves with each game session. 
        Currently in development, Chatwazobia AI aims to be a leading player in both the AI chat and gaming industries."
        buttonText="Open Web"
        imgSrc={cwai} // Replace with an image related to Chatwazobia if available
        status="Development"
        onButtonClick={() => openWebsite("https://www.chatwazobiaai.com/")}
        ctaBgColor="#011404" //011404
        ctaTextColor="#5FFF4D" // Pass the website URL for Chatwazobia AI
      />

   <Section
        title="PickUp: Uber for Dispatch Riders"
        description="PickUp is an innovative on-demand platform designed for dispatch riders, aiming to revolutionize the delivery industry. 
        Similar to Uber, PickUp connects riders with customers needing fast and efficient delivery services. 
        Whether it's a small parcel, food delivery, or essential goods, PickUp ensures that dispatch riders can find jobs quickly and efficiently. 
        The app provides dispatch riders with route optimization, job tracking, and payment management features, while customers can track their deliveries in real-time. 
        PickUp is designed to make deliveries faster, safer, and more reliable for both dispatch riders and customers."
        buttonText="Open Web"
        imgSrc={pickups} // Replace with an image related to PickUp if available
        status="Development"
        onButtonClick={() => openWebsite("https://www.pickupapp.com/")} // Placeholder link
        reverse={true}
        ctaBgColor="red"
      /> */}
    </div>
  );
};

export default OurProjectComponent;
