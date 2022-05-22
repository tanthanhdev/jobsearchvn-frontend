import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// components
// services
import CvService from "services/cv.service";
// slices
import { saveCV } from "slices/cv";
// Utils
import styles from "./Right.module.css";
import { icons } from "utils/icons";
import dateUtils from "utils/date";
import script from "utils/script";
import QRCode from "qrcode.react";

import { useLocation, useParams } from "react-router-dom";

export const Right = ({ Cv }) => {
  const { isLoading } = useSelector((state) => state.cv_template);
  const [isCvSaveExists, setIsCvSaveExists] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    CvService.getIsCVSaveExists(Cv.id)
      .then(() => {
        setIsCvSaveExists(true);
      })
      .catch(() => {
        setIsCvSaveExists(false);
      });
    console.log(Cv);
    // External javascript with DOM
    script.appendScript("https://sp.zalo.me/plugins/sdk.js");
  }, [dispatch]);

  const handleSaveCV = () => {
    dispatch(saveCV({ cv_id: Cv.id }))
      .unwrap()
      .then(() => {
        setIsCvSaveExists(true);
      })
      .catch(() => {});
  };

  const printDocument = () => {
    let input = document.getElementById("divToPrint");
    html2canvas(input, {
      allowTaint: true,
      useCORS: true,
      logging: false,
      height: window.outerHeight + window.innerHeight,
      windowHeight: window.outerHeight + window.innerHeight,
    }).then((canvas) => {
      let imgData = canvas.toDataURL("image/png");
      let pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save(Cv.title + "_" + new Date().getTime() + ".pdf");
    });
  };

  return (
    <div className={styles.wrapper}>
      <div
        data-v-48d91b5b=""
        className={`${styles["secondary-col"]} ${styles["position-relative"]}`}
      >
        <button data-v-48d91b5b="" className={`${styles["close"]}`}>
          <i
            data-v-48d91b5b=""
            className={`${styles["fal"]} ${styles["fa-times"]}`}
          ></i>
        </button>
        <div
          data-v-48d91b5b=""
          className={`${styles["p-3"]} ${styles["border-bottom"]}`}
        >
          <div data-v-48d91b5b="" className={`${styles["d-flex"]}`}>
            <img
              data-v-48d91b5b=""
              src={icons.logo}
              width="145px"
              className={`${styles["mb-2"]} ${styles["mr-auto"]}`}
            />
          </div>
          <div
            data-v-48d91b5b=""
            className={`${styles["d-flex"]} ${styles["align-items-start"]}`}
          >
            <div
              data-v-2a31697a=""
              data-v-48d91b5b=""
              className={`${styles["border"]} ${styles["avatar"]}`}
              style={{
                width: "48px",
                height: "48px",
                flex: "0 0 48px",
                backgroundPosition: "center",
                backgroundImage:
                  "url(" +
                  (Cv.member.avatar ? Cv.member.avatar : icons.logo_default) +
                  ")",
              }}
            ></div>
            <div data-v-48d91b5b="" className={`${styles["ml-2"]}`}>
              <div
                data-v-48d91b5b=""
                className={`${styles["font-weight-bold"]} ${styles["cv-name"]} ${styles["h5"]} ${styles["mb-2"]}`}
              >
                {Cv.member.user.first_name + " " + Cv.member.user.last_name}
              </div>
              <div data-v-48d91b5b="" className={`${styles["cv-updated-at"]}`}>
                Cập nhật lần cuối:{" "}
                {dateUtils.timeSince(new Date(Cv.updated_at))}
              </div>
              <div data-v-48d91b5b="" className={`${styles["mt-2"]}`}></div>
            </div>
          </div>
        </div>
        <div data-v-48d91b5b="" className={`${styles["p-3"]}`}>
          <div data-v-48d91b5b="" className={`${styles["border-bottom"]}`}>
            {/* <div data-v-48d91b5b="" className={`${styles["mb-2"]} ${styles["font-weight-bold"]}`}>
              Thông tin liên hệ
              <span data-v-48d91b5b=""
                className={`${styles["badge"]} ${styles["badge-outline"]} ${styles["badge-success"]}
                ${styles["font-weight-normal"]} ${styles["ml-2"]} ${styles["contact-cost"]}`}>
                10 CP
              </span>
            </div> */}
            <div
              data-v-48d91b5b=""
              className={`${styles["px-3"]} ${styles["py-2"]} ${styles["cv-contact"]}`}
            >
              <div data-v-48d91b5b="">
                <i
                  data-v-48d91b5b=""
                  className={`${styles["fal"]} ${styles["fa-envelope"]} ${styles["mr-3"]}`}
                ></i>
                <span
                  data-v-48d91b5b=""
                  className={`${styles["text-secondary-dark"]}`}
                >
                  {Cv.member.user.email
                    ? Cv.member.user.email
                    : "[Chưa bổ sung]"}
                </span>
              </div>
              <div data-v-48d91b5b="">
                <i
                  data-v-48d91b5b=""
                  className={`${styles["fal"]} ${styles["fa-phone"]} ${styles["mr-3"]}`}
                ></i>
                <span
                  data-v-48d91b5b=""
                  className={`${styles["text-secondary-dark"]}`}
                >
                  {Cv.member.user.phone_number
                    ? Cv.member.user.phone_number
                    : "[Chưa bổ sung]"}
                </span>
              </div>
            </div>
            {/* <div data-v-48d91b5b="" className={`${styles["my-3"]}`}>
              <button data-v-48d91b5b="" type="button"
                className={`${styles["btn"]} ${styles["cv-btn"]} ${styles["min-width"]} ${styles["btn-primary"]} ${styles["w-100"]}`}>
                Xem thông tin liên hệ của ứng viên
              </button>
            </div> */}
          </div>
          <div
            data-v-48d91b5b=""
            className={`${styles["mb-2"]} ${styles["mt-2"]}`}
          >
            <button
              data-v-48d91b5b=""
              type="button"
              className={`${styles["btn"]} ${styles["min-width"]} ${
                styles["w-100"]
              } ${styles["cv-btn"]}
                ${
                  isCvSaveExists
                    ? styles["btn-primary"]
                    : styles["btn-secondary"]
                }`}
              disabled={isLoading || isCvSaveExists}
              onClick={handleSaveCV}
            >
              {isLoading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              {isCvSaveExists ? "Đã lưu CV" : "Lưu CV để theo dõi thêm"}
            </button>
          </div>

          <div
            data-v-48d91b5b=""
            className={`${styles["border-bottom"]} ${styles["mb-3"]} ${styles["pb-3"]}`}
          >
            <hr
              data-v-48d91b5b=""
              className={`${styles["mt-3"]} ${styles["mb-3"]}`}
            />
            <div
              data-v-48d91b5b=""
              className={`${styles["mb-2"]} ${styles["font-weight-bold"]}`}
            >
              Giới thiệu ứng viên
            </div>
            <div
              data-v-48d91b5b=""
              className={`${styles["mb-2"]} ${styles["text-secondary-dark"]}`}
            >
              Nếu bạn cảm thấy ấn tượng với CV của{" "}
              {Cv.member.user.first_name + " " + Cv.member.user.last_name}. Thì
              đừng quên chia sẻ cho bạn bè, đồng nghiệp nhé.
            </div>
            <div data-v-48d91b5b="" className={`${styles["d-flex"]}`}>
              <div
                data-v-48d91b5b=""
                className={`${styles["v-popover"]} ${styles["mr-3"]} ${styles["w-100"]}`}
              >
                <div
                  className={`${styles["trigger"]}`}
                  style={{ display: "inline-block" }}
                >
                  <button
                    data-v-48d91b5b=""
                    type="button"
                    className={`${styles["btn"]} ${styles["min-width"]} ${styles["btn-secondary"]}
                    ${styles["btn-lg"]} ${styles["btn-block"]} ${styles["w-100"]}`}
                  >
                    Chia sẻ CV
                  </button>
                  <div style={{ display: "flex" }}>
                    <TwitterShareButton
                      title={"Chia sẻ CV từ jobsearchdtu.site"}
                      url={"https://www.jobsearchdtu.site/cv/" + Cv.slug}
                      hashtags={["jobsearchdtu.site", "cv"]}
                    >
                      <TwitterIcon
                        size={32}
                        round={true}
                        className={styles["mr-2"]}
                      />
                    </TwitterShareButton>
                    <FacebookShareButton
                      url={"https://www.jobsearchdtu.site/cv/" + Cv.slug}
                      quote={"Chia sẻ CV từ jobsearchdtu.site"}
                      hashtag={"#jobsearchdtu.site"}
                      description={"cv"}
                    >
                      <FacebookIcon
                        size={32}
                        round={true}
                        className={styles["mr-2"]}
                      />
                    </FacebookShareButton>
                    <a
                      target="_blank"
                      href={
                        "https://www.linkedin.com/sharing/share-offsite/?url=https://www.jobsearchdtu.site/cv/" +
                        Cv.slug
                      }
                    >
                      <LinkedinIcon
                        size={32}
                        round={true}
                        className={styles["mr-2"]}
                      />
                    </a>
                    <div
                      className="zalo-share-button"
                      data-href={"https://www.jobsearchdtu.site/cv/" + Cv.slug}
                      data-oaid="579745863508352884"
                      data-layout="3"
                      data-color="blue"
                      data-customize="false"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                data-v-48d91b5b=""
                className={`${styles["v-popover"]} ${styles["w-100"]}`}
              >
                <div
                  className={`${styles["trigger"]}`}
                  style={{ display: "inline-block" }}
                >
                  <a
                    data-v-48d91b5b=""
                    style={{ fontSize: "14px" }}
                    className={`${styles["btn"]} ${styles["btn-lg"]} ${styles["btn-block"]}
                      ${styles["btn-secondary"]} ${styles["w-100"]}`}
                    onClick={printDocument}
                  >
                    Tải CV PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-v-48d91b5b="">
            <QRCode
              id="qrcode"
              value={"https://www.jobsearchdtu.site" + location.pathname}
              size={290}
              level={"H"}
              includeMargin={true}
            />
            {/* <div data-v-48d91b5b="" className={`${styles["mb-2"]} ${styles["font-weight-bold"]}`}>Mã ứng viên</div>
            <div data-v-48d91b5b="" className={`${styles["form-group"]}`}>
              <input data-v-48d91b5b="" disabled="disabled"
                className={`${styles["form-control"]} ${styles["text-center"]} ${styles["cv-code"]} ${styles["cv-btn"]}`} />
            </div> */}
            <div data-v-48d91b5b="" className={`${styles["d-flex"]}`}>
              {/* <button data-v-48d91b5b="" type="button"
                className={`${styles["btn"]} ${styles["min-width"]} ${styles["btn-secondary"]} ${styles["w-100"]} ${styles["mr-3"]} ${styles["cv-btn"]}`}>
                Sao chép mã
              </button> */}
              {/* <button data-v-48d91b5b="" type="button" className={`${styles["btn"]} ${styles["min-width"]} ${styles["btn-secondary"]}
                ${styles["w-100"]} ${styles["cv-btn"]}`}>
                Báo cáo CV
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
