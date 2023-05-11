import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={5} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1683641554881-bc52c1c37ed4',
    title: 'Drr-1',
  },
  {
    img: 'https://images.unsplash.com/photo-1683641554900-01589de446a3',
    title: 'Drr-2',
  },
  {
    img: 'https://images.unsplash.com/photo-1683641554882-ae1aaf5c4d84',
    title: 'Drr-3',
  },
  {
    img: 'https://images.unsplash.com/photo-1683641554972-386ce7b76760',
    title: 'Drr-4',
  },
  {
    img: 'https://images.unsplash.com/photo-1683641554891-cda17a869379',
    title: 'Drr-5',
  },
  {
    img: 'https://images.unsplash.com/photo-1683641554889-11f085187bf3',
    title: 'Drr-6',
  },
  {
    img: 'https://images.unsplash.com/photo-1683641554885-72c78696cfb3',
    title: 'Drr-7',
  },
  {
    img: 'https://images.unsplash.com/photo-1683641554878-c2d3709ae270',
    title: 'Drr-8',
  },
  {
    img: 'https://images.unsplash.com/photo-1683641554914-1a79045b01ac',
    title: 'Drr-9',
  },
  {
    img: 'https://images.unsplash.com/photo-1683641554919-0f43374bb54f',
    title: 'Drr-10',
  },
];