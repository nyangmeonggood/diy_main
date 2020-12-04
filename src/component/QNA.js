import React, { useContext, useEffect, useRef, useState } from "react";
import { settingState } from "../App.js";
import { settingDispatch } from "../App.js";
import "../scss/qna.scss";

export default function QNA() {
  const state = useContext(settingState),
    dispatch = useContext(settingDispatch);

  const convRef = useRef();
  const [converNum, setconverNum] = useState(0);

  return (
    <section id="qna">
      {state.isLoaded && (
        <div className="phone">
          <ul ref={convRef}>
            <li className="server">
              <div>
                안녕하세요? 사이트의 얼굴을 클릭만으로 만들어드립니다!
                <br />
                시작 전에 간단한 질문을 통해 기초적인 뼈대만 만들어 볼꺼에요
                <br />
                먼저 상단 스타일을 골라볼까요?
              </div>
            </li>

            <li className="server" style={{ animationDelay: "0.6s" }}>
              <div>
                리스트 스타일은 2가지로 구성되어있습니다!
                <ul>
                  <li>
                    <button
                      onClick={(e) =>
                        converNum === 0 && replyComment(e, searchType, true)
                      }
                    >
                      찾기가 있는 상단
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={(e) =>
                        converNum === 0 && replyComment(e, searchType, false)
                      }
                    >
                      찾기가 없는 상단
                    </button>
                  </li>
                </ul>
              </div>
            </li>

            {converNum >= 1 && (
              <li className="server">
                <div>
                  다음은 메인 텍스트에 대해 설정해볼께요
                  <br />
                  먼저 정렬에 대해 설정해볼께요
                  <ul>
                    <li>
                      <button
                        onClick={(e) =>
                          converNum === 1 &&
                          replyComment(e, mainTextAlign, "left")
                        }
                      >
                        왼쪽정렬
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) =>
                          converNum === 1 &&
                          replyComment(e, mainTextAlign, "center")
                        }
                      >
                        가운데정렬
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) =>
                          converNum === 1 &&
                          replyComment(e, mainTextAlign, "right")
                        }
                      >
                        오른쪽정렬
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            )}

            {converNum >= 2 && (
              <li className="server">
                <div>
                  이제 메인 텍스트의 위치를 설정해볼께요
                  <br />
                  세부적인 위치는 완성 후에 조정이 가능하니 지금은 대략적인
                  위치만 설정해볼께요!
                  <ul>
                    <li>
                      <button
                        onClick={(e) =>
                          converNum === 2 && replyComment(e, mainTextTop, 20)
                        }
                      >
                        상단
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) =>
                          converNum === 2 && replyComment(e, mainTextTop, 50)
                        }
                      >
                        중간
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) =>
                          converNum === 2 && replyComment(e, mainTextTop, 80)
                        }
                      >
                        하단
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            )}

            {converNum >= 3 && (
              <li className="server">
                <div>
                  수고하셨습니다! 이제 사이트를 확인해볼까요?
                  <br />이 후 조정을 좌측상단 로고를 눌러 환경설정에서 조절이
                  가능합니다!
                  <button onClick={settingComp}>사이트로 이동하기</button>
                </div>
              </li>
            )}
          </ul>
        </div>
      )}
    </section>
  );

  function replyComment(e, action, type) {
    var $li = document.createElement("li");
    $li.classList.add("client");
    $li.innerText = e.target.innerText;
    convRef.current.appendChild($li);
    action(type);
    setconverNum((v) => v + 1);
  }

  function searchType(type) {
    dispatch({ type: "isSearch", isSearch: type });
  }
  function mainTextAlign(align) {
    dispatch({ type: "titleAlign", titleAlign: align });
  }
  function mainTextTop(top) {
    dispatch({ type: "titleTop", titleTop: top });
  }
  function settingComp() {
    dispatch({ type: "isSetting", isSetting: true });
  }
}
