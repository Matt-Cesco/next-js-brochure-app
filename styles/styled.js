import styled from 'styled-components'

export const NavLink = styled.a`
  text-decoration: none;
  color: snow;
  cursor: pointer;
  &:hover {
    color: #F98230;
  }
`;

export const LinkPrimary = styled.a`
  text-decoration: none;
  color: snow;
  cursor: pointer;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid;
  border-color: #F98230;
  &:hover {
    color: snow;
    opacity: 50%;
  }
`;
