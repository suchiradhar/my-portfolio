import React, { useState } from "react";
import AddPostForm from "../../features/posts/addPostForm";
import PostsList from "../../features/posts/postsList";
import "./Videos.css";

import brainstorming from '../../assets/drinkforthought-brainstorming.jpg';
import meeting from '../../assets/drinkforthought-img1.jpeg';
import storyboard from '../../assets/drinkforthought-storyboard.png';
import shootplan from '../../assets/drinkforthought-img2.jpg';
import conclusion from '../../assets/drinkforthought-img7.jpeg';
import shootdayOne from '../../assets/drinkforthought-img5.jpeg';
import shootdayTwo from '../../assets/drinkforthought-img4.jpeg';

const Videos = () => {

  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => setShowMore(!showMore);

  return (
    <div className="videos" id="videos">
      <div className="videos__heading">
        <h2 className="section__title text-cs">Videos</h2>
        <p className="section__subtitle">
          My <span>Project</span>
        </p>
      </div>
    <div className="video__section">

      {/* OneDrive Video Embedding */}
      <div className="video__container container">
        <h2 className="video__title">Drink For Thought</h2>
          <div className="video">
            {/* Embed OneDrive Video */}
            <iframe src="https://ulcampus-my.sharepoint.com/personal/24163988_studentmail_ul_ie/_layouts/15/embed.aspx?UniqueId=c50c5767-b803-4c1d-9702-dc67149cc472&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create" 
            width="640" 
            height="360" 
            frameborder="0" 
            scrolling="no" 
            allowfullscreen 
            title="Drink for thought.mp4"></iframe>
          </div>
          <div className="video__content">
            <p className="video__paragraph">
              The process of filmmaking is both exciting and complex. It's a journey where ideas are brought to life through the combined efforts of many, and the rewards are truly amazing! Films - whether long or short - remain one of the most powerful ways to tell a story.
            </p>
            <p className="video__paragraph">
              Our recent project, Drink for Thought, began with forming a team of five: Elise, Maggie, Vanessa, Amber, and me. We spent countless hours brainstorming the perfect story to tell, mindful of our time and resource constraints.
            </p>
            <p className="video__paragraph">
              We knew we wanted to shoot on campus, making use of different locations depending on the storyline. Shooting in daylight was also appealing as it allowed us to utilize natural light without additional equipment. However, we remained open to new ideas, and this is when the storyboarding began.
            </p>
            {showMore && (
              <>
                <h3 className="video__content-heading">Concept Development</h3>
                <p className="video__paragraph">
                  After thorough discussions, we started developing ideas and notes to shape our story. Using FigJam, we collaborated on the key points, which later translated into concrete scenes.
                </p>
                <p className="video__paragraph">
                The standout idea was “Newton's Apple.” The storyline revolved around a creative designer, Gaby, who struggles to find inspiration for her new product. Our video would be a product advertisement with a narrative centered on Gaby's journey.
                </p>
                <img src={brainstorming} alt="drinkforthought-brainstorming" className="brainstorming" />
                <h4>Key Storyline Points</h4>
                <ul className="video__content-list">
                  <li>- Gaby is a creative designer struggling with ideas.</li>
                  <li>- Frustrated by repeated failures, she feels defeated.</li>
                  <li>- While sitting under a tree, an apple falls on her head, sparking a stream of new ideas.</li>
                  <li>- Gaby succeeds in her project, impressing her seniors.</li>
                  <li>- The closing scene showcases the product she developed.</li>
                </ul>
                <img src={storyboard} alt="drinkforthought-storyboard" className="storyboard" />
                <p className="video__paragraph">
                  We decided to name the video Drink for Thought, a creative twist on the phrase “Food for Thought.” The apple juice featured in the video symbolizes a healthy option that inspires creativity.
                </p>

                <h3 className="video__content-heading">Scriptwriting</h3>
                <p className="video__paragraph">
                  Building on our brainstorming sessions, the team drafted a script that detailed the storyline. Each member contributed their thoughts, refining it to align with the story's vision. We also created shot descriptions to guide the filming process.
                </p>

                <a href="https://ulcampus-my.sharepoint.com/:b:/g/personal/24070742_studentmail_ul_ie/Ef9GupJZCmdOvnOThUxJTcsButai9KUILVFEWvV7jyzQ1Q?e=U5xdxr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="readscript">
                  Read Script
                </a>

                <h3 className="video__content-heading">Pre-Production</h3>
                <p className="video__paragraph">
                  In our second meeting at the UL library, we outlined the storyline in detail, addressing challenges and potential constraints. We determined the locations, shooting schedules, and equipment.
                </p>
                <img src={meeting} alt="drinkforthought-meeting" className="meeting" style={{ width: "50%" }} />
                <h4>Key Decisions</h4>
                <ul className="video__content-list">
                  <li>Locations: UL Library Meeting Room (indoor scenes) and green fields near Plassey House (outdoor scenes).</li>
                  <li>Equipment: iPhone 15 Pro with cinematic mode.</li>
                  <li>Roles:
                      Maggie (Director),
                      Vanessa (Editor),
                      Suchira (Cinematographer),
                      Elise (Lighting and Continuity) and 
                      Amber (Sound)</li>
                </ul>
                <a href="https://ulcampus-my.sharepoint.com/:b:/g/personal/24070742_studentmail_ul_ie/EY0JZPwzh-tDpoOJgvxbaS8Bs0gxdfl8h6QTvEn7K4bi-Q?e=taKH5j" target="_blank" rel="noopener noreferrer">
                  <img src={shootplan} alt="drinkforthought-shootplan" className="shootplan" style={{ width: "90%" }} /></a>
                <p className="video__paragraph">
                  Amber also helped scout actors, and we finalized five cast members: Chen Yuanyuan, Morgan Baker, Yana Bass, Eliza Macovei, and Vanessa Moreno (our teammate).
                </p>
                
                <h3 className="video__content-heading">Production</h3>
                <h4>Day 1: Indoor Shooting</h4>
                <p className="video__paragraph">
                  The first day of filming took place in a group meeting room at the UL Library. The space provided ample lighting and room for our setup. We shot scenes with Gaby presenting her ideas to a panel, focusing on expressions and depth of field using the iPhone’s cinematic mode.
                </p>
                <img src={shootdayOne} alt="drinkforthought-shootdayOne" className="shootdayOne" style={{ width: "90%" }} />
                <h4>Day 2: Outdoor Shooting</h4>
                <p className="video__paragraph">
                  The second day involved two outdoor locations: a parking lot near Dromroe Village and the green fields by Plassey House. We captured Gaby’s frustration and her creative epiphany under a tree. Filming the apple drop scene required careful planning and multiple takes to ensure precision.
                </p>
                <img src={shootdayTwo} alt="drinkforthought-shootdayTwo" className="shootdayTwo" style={{ width: "90%" }} />

                <h3 className="video__content-heading">Post - Production</h3>
                <p className="video__paragraph">
                  The raw footage was compiled for editing in Adobe After Effects, chosen for its flexibility with visual effects. Free sound samples were added as background music to complement the narrative. The final video was shared on OneDrive for feedback before being submitted on Brightspace.
                </p>

                <h3 className="video__content-heading">Conclusion</h3>
                <p className="video__paragraph">
                  This project underscored the importance of teamwork, meticulous planning, and adaptability. Every crew member and actor contributed to a smooth and enjoyable experience. From pre-production to post-production, we learned the value of collaboration and preparation. The outcome, "Drink for Thought", not only met our expectations but also provided invaluable experience in storytelling and video production.
                </p>
                <img src={conclusion} alt="drinkforthought-conclusion" className="conclusion" style={{ width: "90%" }} />

              </>
            )}
            <div className="button__container">
              <button className="readmore hero__link" onClick={handleReadMore}>
                {showMore ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>  
        <div className="comments__container container">
          <AddPostForm />
          <PostsList />
        </div>
      </div>
    </div>
  );
};

export default Videos;