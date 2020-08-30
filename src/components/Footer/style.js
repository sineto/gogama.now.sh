import styled from 'styled-components';

export const Container = styled.footer`
  background: #1f1f1f;
  padding: 1rem;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

  
	p {
		font-size: 1.1em;
		font-weight: 600;
		margin: 1em;
    display: flex;
    align-items: center;
	}
  
  img {
    max-width: 64px;
  }

	@media (max-width: 500px) {
		flex-wrap: nowrap;
		flex-direction: column;
		justify-content: center;

    p {
      order: 2;
    }
	}
`;

export const Button = styled.a` 
	font-weight: 500;
	color: #63DC3E;
	border: 2px solid #63DC3E;
	background: #1f1f1f;
	margin: 1em;
	padding: 0.75em;
	cursor: pointer;

	transition: all 0.2s ease-in-out;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		color: #1f1f1f;
		background-color: #63DC3E;
	}
`;

