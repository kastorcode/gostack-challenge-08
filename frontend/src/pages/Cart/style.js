import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
	padding: 30px;
	background-color: #fff;
	border-radius: 4px;

	footer {
		margin-top: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		button {
			background-color: #7159c1;
			color: #fff;
			border: 0;
			border-radius: 4px;
			padding: 12px 20px;
			font-weight: bold;
			text-transform: uppercase;
			transition: 0.2s;

			&:hover {
				background-color: ${darken(0.03, '#7159c1')};
			}
		}
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		h1 {
			font-size: 32px;
			color: #999;
			margin-left: 4px;
		}
	}
`;

export const ProductTable = styled.table`
	width: 100%;

	thead th {
		color: #999;
		text-align: left;
		padding: 12px;
	}

	tbody td {
		padding: 12px;
		border-bottom: 1px solid #eee;
	}

	img {
		max-width: 100px;
	}

	strong {
		color: #333;
		display: block;
	}

	span {
		display: block;
		margin-top: 5px;
		font-size: 18px;
		font-weight: bold;
	}

	div {
		display: flex;
		align-items: center;

		input {
			border: 1px solid #ddd;
			border-radius: 4px;
			color: #667;
			padding: 6px;
			width: 50px;
		}
	}

	button {
		background: none;
		border: 0;
		padding: 6px;
	}
`;

export const Total = styled.div`
	display: flex;
	align-items: baseline;

	span {
		color: #999;
		font-weight: bold;
	}

	strong {
		font-size: 28px;
		margin-left: 5px;
	}
`;