import { useHover } from '@uidotdev/usehooks';
import '/src/style/card.css';

export function ProductCard(){

    const product ={
        "_id": "3274080005003",
        "_keywords": [
            "beverage",
            "cristaline",
            "de",
            "eau",
            "etat",
            "france",
            "gurson",
            "naturel",
            "saint-martin",
            "source",
            "spring",
            "triman",
            "water"
        ],
        "brands": "Cristaline",
        "categories_tags": [
            "en:beverages",
            "en:waters",
            "en:spring-waters"
        ],
        "countries": "Belgium,Côte d'Ivoire,France,Germany,Guadeloupe,Italy,Luxembourg,Mali,Martinique,New Caledonia,Switzerland,United Kingdom",
        "generic_name": "Eau de source état naturel",
        "ingredients_text": "Eau de source",
        "nutriments": {
            "bicarbonate": 0.219,
            "bicarbonate_100g": 0.0219,
            "bicarbonate_label": "Bicarbonate",
            "bicarbonate_serving": 0.219,
            "bicarbonate_unit": "mg",
            "bicarbonate_value": 219,
            "calcium": 0.068,
            "calcium_100g": 0.0068,
            "calcium_label": "Calcium",
            "calcium_serving": 0.068,
            "calcium_unit": "mg",
            "calcium_value": 68,
            "carbohydrates": 0,
            "carbohydrates_100g": 0,
            "carbohydrates_serving": 0,
            "carbohydrates_unit": "g",
            "carbohydrates_value": 0,
            "carbon-footprint-from-known-ingredients_product": 600,
            "chloride": 0.028,
            "chloride_100g": 0.0028,
            "chloride_label": "Chlorure",
            "chloride_serving": 0.028,
            "chloride_unit": "mg",
            "chloride_value": 28,
            "en-fluor": 0.0002,
            "en-fluor_100g": 2e-05,
            "en-fluor_label": "Fluor",
            "en-fluor_serving": 0.0002,
            "en-fluor_unit": "mg",
            "en-fluor_value": 0.2,
            "energy": 0,
            "energy-kcal": 0,
            "energy-kcal_100g": 0,
            "energy-kcal_serving": 0,
            "energy-kcal_unit": "kcal",
            "energy-kcal_value": 0,
            "energy-kcal_value_computed": 0,
            "energy-kj": 0,
            "energy-kj_100g": 0,
            "energy-kj_serving": 0,
            "energy-kj_unit": "kJ",
            "energy-kj_value": 0,
            "energy-kj_value_computed": 0,
            "energy_100g": 0,
            "energy_serving": 0,
            "energy_unit": "kJ",
            "energy_value": 0,
            "fat": 0,
            "fat_100g": 0,
            "fat_serving": 0,
            "fat_unit": "g",
            "fat_value": 0,
            "fiber": 0,
            "fiber_100g": 0,
            "fiber_serving": 0,
            "fiber_unit": "g",
            "fiber_value": 0,
            "fruits-vegetables-legumes-estimate-from-ingredients_100g": 0,
            "fruits-vegetables-legumes-estimate-from-ingredients_serving": 0,
            "fruits-vegetables-nuts-estimate-from-ingredients_100g": 0,
            "fruits-vegetables-nuts-estimate-from-ingredients_serving": 0,
            "magnesium": 0.011,
            "magnesium_100g": 0.0011,
            "magnesium_label": "Magnésium",
            "magnesium_serving": 0.011,
            "magnesium_unit": "mg",
            "magnesium_value": 11,
            "nitrate": 0.001,
            "nitrate_100g": 0.0001,
            "nitrate_label": "Nitrate",
            "nitrate_modifier": "<",
            "nitrate_serving": 0.001,
            "nitrate_unit": "mg",
            "nitrate_value": 1,
            "nova-group": 1,
            "nova-group_100g": 1,
            "nova-group_serving": 1,
            "nutrition-score-fr": 0,
            "nutrition-score-fr_100g": 0,
            "potassium": 0.002,
            "potassium_100g": 0.0002,
            "potassium_label": "Potassium",
            "potassium_serving": 0.002,
            "potassium_unit": "mg",
            "potassium_value": 2,
            "proteins": 0,
            "proteins_100g": 0,
            "proteins_serving": 0,
            "proteins_unit": "g",
            "proteins_value": 0,
            "salt": 0.0525,
            "salt_100g": 0.00525,
            "salt_serving": 0.0525,
            "salt_unit": "mg",
            "salt_value": 52.5,
            "saturated-fat": 0,
            "saturated-fat_100g": 0,
            "saturated-fat_serving": 0,
            "saturated-fat_unit": "g",
            "saturated-fat_value": 0,
            "silica": 0.012,
            "silica_100g": 0.0012,
            "silica_label": "Silice",
            "silica_serving": 0.012,
            "silica_unit": "mg",
            "silica_value": 12,
            "sodium": 0.021,
            "sodium_100g": 0.0021,
            "sodium_serving": 0.021,
            "sodium_unit": "mg",
            "sodium_value": 21,
            "sugars": 0,
            "sugars_100g": 0,
            "sugars_serving": 0,
            "sugars_unit": "g",
            "sugars_value": 0,
            "sulphate": 0.039,
            "sulphate_100g": 0.0039,
            "sulphate_label": "Sulfate",
            "sulphate_serving": 0.039,
            "sulphate_unit": "mg",
            "sulphate_value": 39
        },
        "nutriscore_2023_tags": [
            "a"
        ],
        "packaging_text": "1 bouteille en plastique PET à recycler\r\n1 bouchon en plastique à recycler",
        "product_name": "Eau de source",
        "quantity": "1,5 L",
        "selected_images": {
            "front": {
                "display": {
                    "ar": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_ar.812.400.jpg",
                    "de": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_de.871.400.jpg",
                    "en": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_en.797.400.jpg",
                    "fr": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_fr.950.400.jpg",
                    "it": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_it.558.400.jpg",
                    "ro": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_ro.704.400.jpg"
                },
                "small": {
                    "ar": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_ar.812.200.jpg",
                    "de": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_de.871.200.jpg",
                    "en": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_en.797.200.jpg",
                    "fr": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_fr.950.200.jpg",
                    "it": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_it.558.200.jpg",
                    "ro": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_ro.704.200.jpg"
                },
                "thumb": {
                    "ar": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_ar.812.100.jpg",
                    "de": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_de.871.100.jpg",
                    "en": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_en.797.100.jpg",
                    "fr": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_fr.950.100.jpg",
                    "it": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_it.558.100.jpg",
                    "ro": "https://images.openfoodfacts.net/images/products/327/408/000/5003/front_ro.704.100.jpg"
                }
            },
            "ingredients": {
                "display": {
                    "en": "https://images.openfoodfacts.net/images/products/327/408/000/5003/ingredients_en.748.400.jpg",
                    "fr": "https://images.openfoodfacts.net/images/products/327/408/000/5003/ingredients_fr.948.400.jpg"
                },
                "small": {
                    "en": "https://images.openfoodfacts.net/images/products/327/408/000/5003/ingredients_en.748.200.jpg",
                    "fr": "https://images.openfoodfacts.net/images/products/327/408/000/5003/ingredients_fr.948.200.jpg"
                },
                "thumb": {
                    "en": "https://images.openfoodfacts.net/images/products/327/408/000/5003/ingredients_en.748.100.jpg",
                    "fr": "https://images.openfoodfacts.net/images/products/327/408/000/5003/ingredients_fr.948.100.jpg"
                }
            },
            "nutrition": {
                "display": {
                    "en": "https://images.openfoodfacts.net/images/products/327/408/000/5003/nutrition_en.767.400.jpg",
                    "fr": "https://images.openfoodfacts.net/images/products/327/408/000/5003/nutrition_fr.928.400.jpg",
                    "it": "https://images.openfoodfacts.net/images/products/327/408/000/5003/nutrition_it.864.400.jpg",
                    "ro": "https://images.openfoodfacts.net/images/products/327/408/000/5003/nutrition_ro.690.400.jpg"
                },
                "small": {
                    "en": "https://images.openfoodfacts.net/images/products/327/408/000/5003/nutrition_en.767.200.jpg",
                    "fr": "https://images.openfoodfacts.net/images/products/327/408/000/5003/nutrition_fr.928.200.jpg",
                    "it": "https://images.openfoodfacts.net/images/products/327/408/000/5003/nutrition_it.864.200.jpg",
                    "ro": "https://images.openfoodfacts.net/images/products/327/408/000/5003/nutrition_ro.690.200.jpg"
                },
                "thumb": {
                    "en": "https://images.openfoodfacts.net/images/products/327/408/000/5003/nutrition_en.767.100.jpg",
                    "fr": "https://images.openfoodfacts.net/images/products/327/408/000/5003/nutrition_fr.928.100.jpg",
                    "it": "https://images.openfoodfacts.net/images/products/327/408/000/5003/nutrition_it.864.100.jpg",
                    "ro": "https://images.openfoodfacts.net/images/products/327/408/000/5003/nutrition_ro.690.100.jpg"
                }
            },
            "packaging": {
                "display": {
                    "en": "https://images.openfoodfacts.net/images/products/327/408/000/5003/packaging_en.785.400.jpg",
                    "fr": "https://images.openfoodfacts.net/images/products/327/408/000/5003/packaging_fr.930.400.jpg"
                },
                "small": {
                    "en": "https://images.openfoodfacts.net/images/products/327/408/000/5003/packaging_en.785.200.jpg",
                    "fr": "https://images.openfoodfacts.net/images/products/327/408/000/5003/packaging_fr.930.200.jpg"
                },
                "thumb": {
                    "en": "https://images.openfoodfacts.net/images/products/327/408/000/5003/packaging_en.785.100.jpg",
                    "fr": "https://images.openfoodfacts.net/images/products/327/408/000/5003/packaging_fr.930.100.jpg"
                }
            }
        }
    }
    const nutriscoreImg = (rate) => {
        if (rate === 'a'){
            return <img src='/public/nutriscore/nutriscore-a.svg' alt='nutriscore a'/>
        } else if (rate === 'b'){
            return <img src="/public/nutriscore/nutriscore-b.svg" alt='nutriscore b'/>
        } else if (rate === 'c'){
            return <img src="/public/nutriscore/nutriscore-c.svg" alt='nutriscore c'/>
        } else if (rate === 'd'){
            return <img src="/public/nutriscore/nutriscore-d.svg" alt='nutriscore d'/>
        } else if (rate === 'e'){
            return <img src="/public/nutriscore/nutriscore-e.svg" alt='nutriscore e'/>
        } else {
            return;
        }
    }
    const [ref, hovering] = useHover();

    const border = hovering ? "solid 2px #000" : 'solid 2px transparent';

    return (
        <div className="product__card" ref={ref} style={{border}} id={product._id}>
            <img src={product.selected_images.front.display.fr} alt={product.product_name} className="product__card__image"/>
            <div className="product__card__info">
                <h3 className="product__card__name">{product.product_name}</h3>
                <div className="product__card__nutriscore">{nutriscoreImg(product.nutriscore_2023_tags[0])}</div>
            </div>
        </div>
    );
}
