import styled from "styled-components";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Wrapper>
      {pages.map((page) => (
        <PageButton
          key={page}
          isActive={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const PageButton = styled.button<{ isActive: boolean }>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.text : theme.button};
  color: ${({ theme, isActive }) =>
    isActive ? theme.background : theme.text};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;
