import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddresses } from "@/components/common/getAddresses";
import { getContractMetamask } from "@/web3";
import cards from "@/metadata/cards.json";

export interface CounterState {
  balanceCards: [];
  balancePacks: [];
}

const initialState: CounterState = {
  balanceCards: [],
  balancePacks: [],
};

export const onGetAssets = createAsyncThunk(
  "GET_ASSETS",
  async function prepare(address: string) {
    try {
      const {
        matic: { endersGate, pack },
      } = getAddresses();
      const cardsContract = getContractMetamask("EndersGate", endersGate);
      const packsContract = getContractMetamask("EndersPack", pack);
      const packsIds = [0, 1, 2, 3];
      const cardsIds = Object.values(cards)
        .reduce((acc: any[], cur) => acc.concat(cur), [])
        .map(
          (card, i) =>
            // card.properties?.id?.value !== undefined
            //   ? card.properties.id.value
            i,
        );

      const balancePacks = await packsContract.methods
        .balanceOfBatch(
          packsIds.map(() => address),
          packsIds,
        )
        .call();
      const balanceCards = await cardsContract.methods
        .balanceOfBatch(
          cardsIds.map(() => address),
          cardsIds,
        )
        .call();

      return {
        balanceCards: cardsIds.map((id, i) => ({
          id,
          balance: balanceCards[i],
        })),
        balancePacks: packsIds.map((id, i) => ({
          id,
          balance: balancePacks[i],
        })),
      };
    } catch (err) {
      console.log({ err });
      throw err;
    }
  },
);

export const nftSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {
    setAssets: (state: any, action) => {
      state.balanceCards = action.payload.balanceCards;
      state.balancePacks = action.payload.balancePacks;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAssets } = nftSlice.actions;

export default nftSlice.reducer;
