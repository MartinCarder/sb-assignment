import React from "react";
import Image from "next/image";
import { FavButton } from '../favButton/favButton'
import { ProductCellProps } from "./productCell.interface";
import style from "./productCell.module.css";


export const ProductCell: React.FC<ProductCellProps> = ({
  name,
  image,
  description,
  category,
}) => {
  return (
    <article>
      <div className={`relative overflow-hidden ${style["image-wrapper"]}`}>
        <Image src={image} fill className={style["image"]} alt={name} />
      </div>
      <div className="relative">
        <h2 className="font-bold my-3.5 mr-7">{name}</h2>
        <FavButton />
        <p>{description}</p>

        <p className="mt-2.5">{category}</p>
      </div>
    </article>
  );
};