import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  title = 'Lista de Produtos';

  products = [
    {
        id: 1,
        description: 'Notebook S51',
        img: 'https://images.samsung.com/is/image/samsung/br-notebook-style-s51-np730xbe-kp1br-np730xbe-kp1br-fronttitanumsilver-185313138?$720_576_PNG$',
        price: 5000
    },
    {
        id: 2,
        description: 'Notebook Samsung Book E30 Intel Core i3 4GB 1TB - 15,6” Full HD Windows 10',
        img: 'https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-book-e30-intel-core-i3-4gb-1tb-156-full-hd-windows-10/magazineluiza/135258300/44bf629ad1472f3a86f5ae8b55ed0672.jpg',
        price: 3500
    },
    {
        id: 3,
        description: 'Notebook Acer Aspire 5 A514-53-59QJ Intel Core I5 8GB 256GB SSD 14 Windows 10',
        img: 'https://acerstore.vteximg.com.br/arquivos/ids/157506-760-760/A514-53-54_SSD_01.jpg?v=637396805695270000',
        price: 4000
    },
    {
        id: 4,
        description: 'Notebook Samsung Book E30 15.6" Intel® Core™ i3-10110U 4GB/1TB Windows 10 Home',
        img: 'https://d3bkgvrq5dqryp.cloudfront.net/Custom/Content/Products/34/17/3417_product-00079815_m39_637400210574011388',
        price: 3000
    },
    {
        id: 5,
        description: 'Notebook ASUS VivoBook X543UA-GQ3157T Cinza Escuro',
        img: 'https://www.lojaasus.com.br/media/catalog/product/cache/e62f984c1b34771579d59f0076d196f0/0/0/00asus_laptop_x543_cinza_escuro_13_1_8.png',
        price: 3350
    },
    {
        id: 6,
        description: 'Notebook Positivo Duo C464C, Intel® Celeron® Dual Core N3350',
        img: 'https://d1kvbg99uxpcu.cloudfront.net/Custom/Content/Products/10/70/1070610_notebook-positivo-duo-c464c-intel-celeron-dual-core-n3350-4gb-ram-armazenamento-64gb-e-mmc-fhd-12-cinza_s1_637353333161159413.jpg',
        price: 5000
    },
    {
        id: 7,
        description: 'Notebook 2 em 1 Dell Inspiron 5406-M30S 14” Full HD Touch 11ª',
        img: 'https://a-static.mlcdn.com.br/618x463/notebook-dell-inspiron-i15-3583-m3xp-8a-geracao-intel-core-i5-8gb-1tb-15-6-windows-10-preto-mcafee/dell/ci3583w111brw/6845b887836c3a7afee1cc2f7665d175.jpg',
        price: 5000
    },
    {
        id: 8,
        description: 'Docooler L350 Fones de Ouvido Sem Fio',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51EPZQncIvL._AC_SY450_.jpg',
        price: 160
    },
    {
        id: 9,
        description: 'JBL TUNE 500BT',
        img: 'https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1449667479',
        price: 300
    },
    {
        id: 10,
        description: 'Fone de Ouvido Estéreo Bluetooth W820BT Vermelho - EDIFIER',
        img: 'https://www.kalifa.com.br/produto/5037/imagem/3/0/fone-de-ouvido-estereo-bluetooth-w820bt-vermelho-edifier.jpg',
        price: 400
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
