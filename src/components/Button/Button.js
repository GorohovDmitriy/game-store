import React from 'react'
import classNames from 'classnames'
import './Button.css'

const Button = ({ onClick, type, children, size = 's' }) => {
	const buttonClass = classNames({
		'btn': true,
		'btn-secondary': type === 'secondary',
		'btn-primary': type === 'primary',
		'btn-small': size === 's',
		'btn-medium': size === 'm',
	})

	return (
		<button className={buttonClass} onClick={onClick} >
			{children}
		</button>
	)
}

export { Button }
