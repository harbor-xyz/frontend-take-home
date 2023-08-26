import PolygonIcon from '../../../icons/Polygon.svg';
import AlchemyIcon from '../../../icons/Alchemy.svg';
import FantomIcon from '../../../icons/Fantom.svg';
import EthereumIcon from '../../../icons/Ethereum.svg';
import OptimismIcon from '../../../icons/Optimisim.svg';
import { testnetChainsType, testnetChainValues } from '../../fetchTestnetsData';

export type IconData = {
  icon: string;
  name: string;
};

export const getBlockChainIcons = (testnetChains: testnetChainsType[]) => {
  const iconsArr: IconData[] = [];
  testnetChains.forEach((item) => {
    switch (item.chain) {
      case testnetChainValues.POLYGON:
        iconsArr.push({ icon: PolygonIcon, name: item.chain });
        break;

      case testnetChainValues.ALCHEMY:
        iconsArr.push({ icon: AlchemyIcon, name: item.chain });
        break;

      case testnetChainValues.ETHEREUM:
        iconsArr.push({ icon: EthereumIcon, name: item.chain });
        break;

      case testnetChainValues.OPTIMISM:
        iconsArr.push({ icon: OptimismIcon, name: item.chain });
        break;

      case testnetChainValues.FANTOM:
        iconsArr.push({ icon: FantomIcon, name: item.chain });
        break;
    }
  });
  return iconsArr;
};
