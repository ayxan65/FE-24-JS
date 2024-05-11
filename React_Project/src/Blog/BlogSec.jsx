import React from "react";

import Blogdata from "./Blogdata";
import Blogtitle from "./Blogtitle";

const BlogSec = () => {
  return (
    <div>
      
      <div className="blog-main">
        <Blogtitle
          desc1=" Apparently we had reached a great height in the atmosphere, for the
      sky was a dead black, and the stars had ceased to twinkle. By the same
      illusion which lifts the horizon of the sea to the level of the"
          desc="spectator on a hillside."
        read='read more'/>
        <div className="our_blog">
          <Blogdata />
        </div>
      </div>
    </div>
  );
};

export default BlogSec;
