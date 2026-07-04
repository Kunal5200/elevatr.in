import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Circle } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SxProps,
} from "@mui/material";
import React from "react";
interface listProps {
  data: string[];
  sx?: SxProps;
  typographyStyle?: SxProps;
}
const CustomList = ({ data, sx, typographyStyle }: listProps) => {
  return (
    <Box>
      <List>
        {data.map((val, i) => (
          <ListItem key={i} disablePadding sx={{ ...sx }}>
            <ListItemAvatar sx={{ minWidth: 20 }}>
              <Circle sx={{ fill: COLORS.GRAY, width: 10, height: 10 }} />
            </ListItemAvatar>
            <ListItemText
              primary={val}
              slotProps={{
                primary: {
                  sx: {
                    ...typographyStyle,
                  },
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CustomList;
