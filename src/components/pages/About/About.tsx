import React from 'react';
import styled from 'styled-components';

import { Section } from '@/components/templates';
import { Box } from '@/components/commons';

const About = () => {
  return (
    <Wrapper>
      <Section title='과제 소개' maxWidth='800px'>
        <Box>
          <p>
            안녕하세요 퍼플아이오 지원자{' '}
            <a
              href='https://github.com/taurusboong2'
              target='_blank'
              rel='noreferrer'
            >
              이재붕
            </a>
            입니다. 해당 과제를 간략히 소개하겠습니다.
          </p>
          <p>주어진 요구사항을 충실히 구현하였습니다.</p>
          <p>
            NEXT.js 환경에서 디자인 라이브러리인 Antd를 사용해서 구현하였습니다.
          </p>
          <p>
            헤더-바디-푸터 형식의 레이아웃을 취했으며, 레이아웃 컴포넌트를 따로
            만들어서 루트에서 적용해주었습니다. 헤더에는 프로젝트 이름과 메뉴를
            명시해주었습니다. 마찬가지로 푸터에는 카피라이트를 추가하였습니다.
            제 닉네임을 클릭하시면 깃허브 프로필을 방문 할 수 있습니다.
          </p>
          <p>
            ABOUT 페이지(지금 보고 계시는 페이지)는 정적으로 간단히 프로젝트
            소개 문구를 작성하였습니다.
          </p>
          <p>
            메인에서 스토어리스트는 정사각형 이미지 그리드로 표현하였으며,
            하나의 스토어를 클릭하면 팝업과 함께 해당 맛집의 상세 내용을
            뿌려주었습니다. 팝업 오른쪽 위에 X를 누르면 마찬가지로 팝업이
            닫힙니다.
          </p>
          <p>
            정의하지 않는 페이지에 접근할 경우 404에러 페이지와 함께 5초 후에
            홈으로 리다이렉트 처리를 해주었습니다. 리다이렉트 커스텀 훅을 따로
            정의하여, 재사용성을 고려해봤습니다.
          </p>
          <p>
            데이터를 GET하는 커스텀 훅을 작성하여 조금 더 가독성이 좋고
            유지관리가 원활하게끔 고려하였습니다. 커스텀훅을 사용하면 로딩과
            에러 상태 처리도 매우 원활하며, 제가 리액트 쿼리를 사용할 때 이러한
            점이 굉장히 인상적이여서 거기서 차용을 하였습니다.
          </p>
          <p>
            로딩 상태일 때는 로딩 스피너 컴포넌트를 활용하여 사용자에게
            로딩중이라는 것을 알려주었습니다.
          </p>
          <p>
            컴포넌트의 경우 동료와의 협업을 고려하여, 재사용성을 생각하여
            디렉토리별로 구분을 하였습니다. import/export를 편리하게 하기 위해
            최적화 또한 해주었습니다.
          </p>
          <p>감사합니다.</p>
        </Box>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  p {
    color: #555;
    font-size: 1.1rem;
    line-height: 1.5;
    padding: 10px 0;
  }
`;

export default About;
