import { Equipment } from "./Equipment"
import { Plants } from "./Plants"

export const Products = () => {
  return (
	<section className="products">
		<div className="container products__container">
			
			{location.href.includes("/equipment") 
				&& 
					<>
						<Equipment />
					</>
			}

			{location.href.includes("/plants") 
				&& 
					<>
						<Plants />
					</>
			}
		</div>
	</section>
  )
}
