import {
  Box,
  Card,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { WHY_ELEVATR_CARD_PROPS } from "@/utils/types";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";

const WhyElevatrCard = ({ isEven, title, data }: WHY_ELEVATR_CARD_PROPS) => {
  return (
    <Box>
      <Card
        sx={{
          backgroundColor: isEven ? COLORS.PRIMARY : COLORS.WHITE,
          padding: "32px",
          boxShadow: isEven
            ? "0 8px 80px 0 rgba(124, 93, 250, 0.32)"
            : "0 8px 80px 0 rgba(167, 167, 167, 0.24)",
          borderRadius: "16px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontFamily: poppins.style.fontFamily,
            fontWeight: 500,
            letterSpacing: "1.44px",
            lineHeight: "27.6px",
            color: isEven ? COLORS.WHITE : COLORS.PRIMARY,
          }}
        >
          {title}
        </Typography>
        <Divider
          sx={{
            backgroundColor: isEven
              ? "rgba(255, 255, 255, 0.16)"
              : "rgba(133, 147, 163, 0.16)",
            mt: 3,
          }}
        />

        <List>
          {data.map((val, i) => (
            <ListItem key={i}>
              <ListItemAvatar sx={{ minWidth: 40 }}>
                <val.icon
                  sx={{
                    fill: isEven ? COLORS.WHITE : "#FF6954",
                    fillOpacity: isEven ? 1 : 0.32,
                    fontSize: 20,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "18.4px",
                      letterSpacing: "0.96px",
                      fontFamily: poppins.style.fontFamily,
                      color: isEven ? COLORS.WHITE : COLORS.PRIMARY,
                    }}
                  >
                    {val.title}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </Box>
  );
};

export default WhyElevatrCard;
