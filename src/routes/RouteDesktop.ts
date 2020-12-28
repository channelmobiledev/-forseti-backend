import express from 'express';

const router = express.Router();

const desktopGetDeskDetails = (req: any, res: any) => {
  // TODO Remove dummy data

  const dummyData = [
    {
      icon: 'https://i.ebayimg.com/images/g/Q0gAAOSwq4dbgrZC/s-l1600.jpg',
      type: 'Computer',
      name: 'Asus N550JK',
      link: 'http://buymenow.com'
    },
    {
      icon:
        'https://www.ikea.com/gb/en/images/products/linnmon-adils-table-black-brown-blue__0851744_PE594779_S5.JPG?f=g',
      type: 'Desk',
      name: 'Ikea LINNMON / ADILS',
      link:
        'https://www.ikea.com/gb/en/p/linnmon-adils-table-black-brown-blue-s29133599/'
    },
    {
      icon:
        'https://www.logitech.com/assets/65763/32/k380-multi-device-bluetooth-keyboard.jpg',
      type: 'Keyboard',
      name: 'Logitech K380',
      link: 'https://www.logitech.com/en-gb/product/multi-device-keyboard-k380'
    }
  ];

  const response = {
    gallery: [
      {
        uri: 'https://i.ebayimg.com/images/g/Q0gAAOSwq4dbgrZC/s-l1600.jpg'
      }
    ],
    info: dummyData
  };

  // TODO Remove dummy data

  const deskId = req.body.id;

  if (!deskId) {
    return res.status(400).send({
      error: 'deskId: value missing'
    });
  }

  res.json(response);
  console.log('GET /desktop/ success');
};

router.post('/', desktopGetDeskDetails);

export default router;
