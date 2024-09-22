//1. 동영상 재생기 https://school.programmers.co.kr/learn/courses/30/lessons/340213#

function formatNumber(num) {
    return num.toString().padStart(2, "0");
  }
  
  function solution(video_len, pos, op_start, op_end, commands) {
    let posDate = changeStringToDate(pos);
    let videoDate = changeStringToDate(video_len);
    let opStartDate = changeStringToDate(op_start);
    let opEndDate = changeStringToDate(op_end);
  
    // 오프닝 구간에 있는지 확인하고 건너뛰기
    if (posDate >= opStartDate && posDate <= opEndDate) {
      posDate = new Date(opEndDate); // 오프닝 끝으로 이동
    }
  
    for (let command of commands) {
      posDate = doCommand(command, posDate, videoDate, opStartDate, opEndDate); // 돌릴 때마다 posDate가 바뀐다.
    }
  
    // posDate를 string 으로 바꾼다.
    const posDateToString = `${String(posDate.getMinutes()).padStart(2, "0")}:${String(posDate.getSeconds()).padStart(2, "0")}`;
    return posDateToString;
  }
  
  function changeStringToDate(dateString) {
    const date = new Date(2020, 0, 1); // 기준 날짜 설정
    let dateArray = dateString.split(":");
  
    date.setHours(0, 0, 0, 0); // 시간, 밀리초를 0으로 초기화
    date.setMinutes(parseInt(dateArray[0], 10));
    date.setSeconds(parseInt(dateArray[1], 10));
  
    return date;
  }
  
  function doCommand(command, posDate, videoDate, opStartDate, opEndDate) {
    // 경계를 벗어나지 않도록 시간 계산
    const totalPosSeconds = posDate.getMinutes() * 60 + posDate.getSeconds();
    const totalVideoSeconds = videoDate.getMinutes() * 60 + videoDate.getSeconds();
    const totalOpEndSeconds = opEndDate.getMinutes() * 60 + opEndDate.getSeconds();
    const totalOpStartSeconds = opStartDate.getMinutes() * 60 + opStartDate.getSeconds();
  
    if (command === "next") {
      // 현재 위치에서 10초를 더한 값이 영상의 길이를 초과하지 않도록 제한
      if (totalPosSeconds + 10 >= totalVideoSeconds) {
        posDate = new Date(videoDate); // 마지막 위치로 이동
      } else {
        posDate.setSeconds(posDate.getSeconds() + 10);
      }
    } else if (command === "prev") {
      // 현재 위치에서 10초를 뺀 값이 0 이하가 되지 않도록 제한
      if (totalPosSeconds - 10 <= 0) {
        posDate.setMinutes(0);
        posDate.setSeconds(0); // 처음 위치로 이동
      } else {
        posDate.setSeconds(posDate.getSeconds() - 10);
      }
    }
  
    // 오프닝 구간에 있으면 오프닝 끝으로 이동
    const updatedPosSeconds = posDate.getMinutes() * 60 + posDate.getSeconds();
    if (updatedPosSeconds >= totalOpStartSeconds && updatedPosSeconds <= totalOpEndSeconds) {
      posDate = new Date(opEndDate); // 오프닝 끝으로 이동
    }
  
    return posDate;
  }
  