/*
 *    Copyright [2021] [wisemapping]
 *
 *   Licensed under WiseMapping Public License, Version 1.0 (the "License").
 *   It is basically the Apache License, Version 2.0 (the "License") plus the
 *   "powered by wisemapping" text requirement on every single page;
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the license at
 *
 *       http://www.wisemapping.org/license
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */
import styled from 'styled-components';
import { times } from '../size';
import LogoTextBlackSvg from '../../../images/logo-text-black.svg';

export const StyledFooter = styled.div`
  height: ${times(10)};
  width: 100%;
  border: 1px solid black;
`;

export const StyledLogo = styled.div`
  position: fixed;
  left: 20px;
  bottom: 10px;
  background: url(${LogoTextBlackSvg}) no-repeat;
  width: 90px;
  height: 40px;
`;

export const Notifier = styled.div`
  border: 1px solid rgb(241, 163, 39);
  background-color: rgb(252, 235, 192);
  border-radius: 3px;
  position: fixed;
  padding: 5px 9px;
  color: back;
  white-space: nowrap;
  margin-top: 5px;
  display: none;
  bottom: 10px;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;

  button {
    cursor: pointer;
    border-style: hidden;
    background-color: transparent;
    padding: 0px;
  }

  button img {
    width: 18px;
    height: 18px;
    filter: invert(73%) sepia(21%) saturate(4699%) hue-rotate(357deg) brightness(98%) contrast(108%);
  }
`;

export const InfoDialog = styled.div`
  position: absolute;
  text-align: center;
  top: 70px;
  left: 0;
  right: 0;
  background-color: white;
  border: solid 2px #ffa800;
  margin: auto;
  border-radius: 9px;
  width: 80%;
`;

export const InfoDialogContent = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
`;
