import React from "react";
import "./header.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

const header = () => {
  return (
    <div className="header-bar">
      <span className="header-title">
        <h1>
          <span className="header-title-text">
            <span className="header-title-text-1">
              <span className="header-title-text-2">
                <span className="header-title-text-3">
                  <span className="header-title-text-4">
                    <span className="header-title-text-5">
                      <span className="header-title-text-6">
                        <span className="header-title-text-7">
                          <span className="header-title-text-8">
                            <span className="header-title-text-9">
                              <span className="header-title-text-10">
                                <span className="header-title-text-11">
                                  <span className="header-title-text-12">
                                    <span className="header-title-text-13">
                                      <span className="header-title-text-14">
                                        Smileeee :D
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </h1>
      </span>

      <div className="header-center-text">
        <h3>Free To Play</h3>
      </div>

      <div className="header-icon">
        <FavoriteIcon className="favorite-icon" />
        <span className="header-icon-text"> Favorilerim</span>
      </div>
    </div>
  );
};

export default header;
