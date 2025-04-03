import React from 'react';
import "../styles/Social.css";

function WooCommerce() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1 className="heading">Manage insights, personalize experiences, track trends, and monitor performance—all in one place!</h1>
      <p className="Paragraph">Access and analyze reports effortlessly to make data-driven decisions. Customize language preferences for a more personalized 
        and accessible interface. Stay up to date with the latest footwear trends, explore various collections, and manage inventory 
        efficiently. The dashboard provides a comprehensive overview of key metrics, allowing real-time monitoring and informed 
        decision-making. A seamless and organized experience ensures better navigation, helping users stay efficient and in control.</p>
      {/* <iframe width="95%" height="600" src="https://analytics.zoho.in/open-view/406343000000004030"></iframe> */}
     <div className="frame">
      <iframe width="95%" height="600" src="https://analytics.zoho.in/open-view/406343000000004030/d867b2b9deb3b1403735cd87926b486a"></iframe>
      </div>
    </div>
  );
}

export default WooCommerce;
