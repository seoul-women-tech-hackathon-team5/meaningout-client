import { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledReceipt = styled.div`
.img-frame {
    width: 334px;
    height: 438px;
}

.img-select {
    width: 334px;
    height: 438px;
    background: #E8F4FF;
    padding: 6px;
    padding-bottom: 57px;
    transform: translateY(45px);
    border: solid 1px #2294FF;
    border-radius: 8px;
}

.img-select.empty {
    background-image: url("/assets/icons/add-picture.svg");
    background-position: center;
    background-repeat: no-repeat;
}

.img-select.empty:hover {
    background-color: #AFD8FF;
}

.img {
    position: absolute;
    width: 236px;
    height: auto;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
}
`
Receipt.propTypes = {
  onImagesSelected: PropTypes.func,
};

export default function Receipt ({ onImagesSelected }) {
  // 이미지 파일인지 확인
  const fileExtentionCheck = (event) => {
    const file = event.target;
    const fileName = file.files[0].name.toLowerCase();

    if (fileName.endsWith('jpg') || fileName.endsWith('png') || fileName.endsWith('jpeg')){
      return true;
    }

    alert('png, jpg, jpeg 파일만 등록 가능합니다.');
    file.value = '';
    return false;
  };

  // 사진 업로드
  const imageUpload = (e) => {
    if (e.target.className.includes('drag')) {
      e.target.classList.remove('drag');
      return;
    }

    let node = e.target;
    const fileInput = document.querySelector('.file-input');

    fileInput.click();
    fileInput.onchange = (event) => {
      if (!fileExtentionCheck(event)) return;

      if (node.nodeName === 'IMG') {
        node = node.parentNode;
      }

      imagePreview(node, event);
    };
  };

  // 사진 제거
  const imageRemove = (target) => {
    target.innerHTML = '';
  };

  // 사진 미리보기
  const imagePreview = (target, event) => {
    const reader = new FileReader();

    if (!event.target.files[0]) return;

    imageRemove(target);

    reader.onload = function (event) {
      const img = document.createElement('img');
      img.className = 'img';
      img.setAttribute('src', event.target.result);
      target.appendChild(img);
      target.classList.remove('empty');
      dragEvent(img);
      if (typeof onImagesSelected === 'function') {
        onImagesSelected(event.target.result);
      }
    };

    reader.readAsDataURL(event.target.files[0]);
    const fileInput = document.querySelector('.file-input');
    fileInput.value = '';
  };

  // 이미지 드래그
  const dragEvent = (target) => {
    let isPress = false;
    let prevPosX = 0;
    let prevPosY = 0;

    const dragStart = (e) => {
      isPress = true;
      prevPosX = e.clientX;
      prevPosY = e.clientY;
    };

    const dragEnd = () => {
      isPress = false;
    };

    const moveImage = (e) => {
      if (!isPress) return;

      target.classList.add('drag');

      const posX = prevPosX - e.clientX;
      const posY = prevPosY - e.clientY;

      prevPosX = e.clientX;
      prevPosY = e.clientY;

      target.style.left = target.offsetLeft - posX + 'px';
      target.style.top = target.offsetTop - posY + 'px';
    };

    target.onmousedown = dragStart;
    window.onmouseup = dragEnd;
    window.onmousemove = moveImage;
  };

  useEffect(() => {
    const $imageFrame = document.querySelector('.img-frame');
    const $imageSelects = $imageFrame.querySelectorAll('.img-select');
    const setImagePage = () => {
      $imageSelects.forEach((item) => (item.onclick = imageUpload));
    };

    setImagePage();
  });

  return (
    <StyledReceipt>
      <div className="image-page hidden">
        <div className="img-frame">
            <div className="img-select empty"></div>
        </div>
        <input type="file" className="file-input hidden" accept=".jpeg, .png, .jpg" />
      </div>
    </StyledReceipt>
  );
}