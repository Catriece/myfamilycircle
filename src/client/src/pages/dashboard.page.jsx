import React from "react";

function DashboardPage({ user_information }) {
  let { profile_picture } = user_information;

  return (
    <div id="DB-main">
      <div id="DB-home-div">
        <div id="DB-header-div">
          <div id="DB-app-name-div">
            <h3 id="DB-app-name">My Family Circle</h3>
          </div>
          <div id="DB-profile-info-div">
            <img
              src={profile_picture}
              alt="profile_picture"
              id="DB-profile-image"
            />
            <h5 id="DB-profile-name">Hello, "Users Name"</h5>
          </div>
          <div id="DB-messages-btn-div">
            <button id="DB-to-msgs">M</button>
          </div>
        </div>
        <div className="DB-body-div">
          <div id="DB-journal-entry-div">
            <p>What's On Your Mind?</p>
            {/* A FORM THAT PROMPTS USER TO WRITE WHAT'S ON THEIR MIND/ WHAT THEY DID TODAY. CAN RECIEVE PICTURES.
            
            COOL UPDATE FEATURE WOULD BE TO ALLOW FOR PRIVATE ENTRIES*/}
          </div>
          <br />
          <div id="DB-discussion-q-div">
            <p>Family DQ here</p>
            {/* A FORM THAT ASKS FAMILY MEMBERS A QUESTION THEY CAN RESPOND TO */}
          </div>
          <div id="DB-dq-timeline-div">
            <p>Family DQ Timeline here</p>
            {/* RETRIEVES ALL DQ HISTORY (WITHIN A CERTAIN TIME FRAME) FROM MEMBERS IN FAMILY CIRCLE */}
          </div>
          <div id="DB-challenges-div">
            <p>Family Challenges Here</p>
          </div>
        </div>
        <div id="DB-nav-div">{/* CREATE A NAVIGATION LINK HOOK */}</div>
      </div>
    </div>
  );
}

export default DashboardPage;
