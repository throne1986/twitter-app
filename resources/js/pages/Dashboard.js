import React, {useEffect, useState}from 'react'
import { fetchComments, addComment, editComment, deleteComment } from '../store/actions'
import heart from '../assets/images/heart.png'
import shareIcon from '../assets/images/share-symbol.png'
import { connect } from "react-redux";
import axios from 'axios';



function Dashboard(userComments) {

  useEffect(() =>{
    fetchComments();
  }, [fetchComments])

  // useEffect(() => {
    
  //   axios.get('/api/v1/todo')
  //   .then(response =>{
  //     const comments =response.data
  //     console.log("data from api", comments);
  //   })
  //   .catch(error =>{
  //     const erroMsg =error.message;
  //     console.log(erroMsg)
  //   })
  // }, [])

  return (
   
    <div>
     <div className="container main-block">
  
        <div className="profile">
          <div className="profile_card card">
            <div className="profile_btn-share">
              <a href="#" target="_blank" onClick="window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=1200'); return false">
                <button type="button" className="btn-share">
                  <img src={shareIcon} />
                </button>
              </a>
            </div>
            <div className="profile_card-top">
              <div className="photo">
                <img src="http://randomuser.me/api/portraits/men/84.jpg" alt="" />
              </div>
              <div className="details">
                <h1>testa<span className="heart reaction">
                  <img src={heart} /></span></h1>
                <span className="city">testa</span>
              </div>
            </div>
            <ul className="profile_card-bottom">
              <li className="likes">
                <span className="assets-count">testa</span>
                <span className="assets-title">Likes</span>
              </li>
              <li className="following">
                <span className="assets-count">testa</span>
                <span className="assets-title">Following</span>
              </li>
              <li className="followers">
                <span className="assets-count">testa</span>
                <span className="assets-title">Followers</span>
              </li>
              <li className="follow">
                <button className="btn-follow">Follow</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="comments-card card">
          <div className="commets_header">
            <button className="comments_button"
              aria-controls="collapseExample">Hide comments<span className="comments_count">(testa)</span></button>
          </div>
          <div className="comments">
            <div className="wraper">
              <div className="comments-description">
                <div className="comments-photo">
                  <img src="http://randomuser.me/api/portraits/men/84.jpg" alt="" />
                </div>
                <div className="comments_wrapper">
                  <div className="comments_details">
                    <h1>Mike Ross</h1>
                    <span className="days">testa</span>
                  </div>
                  <div className="comments_text">
                    <p>testa </p>
                    <ul>
                      {
                       
                        userComments && userComments.comments && userComments.comments.map(comment =>{
                          <li key={comment.id}>
                              {comment.comments}
                          </li>
                        })
                    }
                    </ul>
                  </div>
                  <div className="comments_edit-delete">
                    <button className="btn-danger">Delete</button>
                    <button className="btn-success">Edit</button>
                  </div>
                </div>
                <div className="comments_line"></div>
              </div>
            </div>

          </div>
          <form className="add-comments">
            <input type="hidden" id="localTime" name="localTime" />
            <div className="form-group">
              <textarea className="form-control" rows="1" placeholder="Add comments" name="description" id="description"></textarea>
            </div>
          </form>
        </div>

      </div>
      
      </div>
  )
}

const mapStateToProps = state => {
  console.log("I am state", state);
  return {
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
    userComments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: () => dispatch(fetchComments()),
  
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);


