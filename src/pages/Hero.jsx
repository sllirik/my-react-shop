import './Hero.css';

export const Hero = () => {
	return (
		<section className="hero">
			<div className="container hero__container">
				<div className="hero-text">
					<p className="suptitle">Лови волну с</p>
					<h1 className="title">"Цунами"</h1>
					<p className="subtitle">Комплекс для переработки терриконов</p>
				</div>
				<div className="hero__image">
					<img className="hero__img" src="https://picsum.photos/300/400" alt="" />
				</div>
			</div>
		</section>
	)
}
