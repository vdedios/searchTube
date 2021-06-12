import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import { LoaderWrapper } from './Loader.styled';

const LoaderIcon = withStyles(() => ({
  root: {
    color: '#68BFCD',
    width: '100%'
  }
}))(CircularProgress);

const Loader: React.FC = () => {
    return (
        <LoaderWrapper>
            <LoaderIcon/>
        </LoaderWrapper>
    );
}

export default Loader;
