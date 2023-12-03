import { Button } from "@radix-ui/themes";


const LMSButton = ({ title, icon }) => {

    return (
        <Button>
            {icon} {title}
        </Button>
    );
}

export default LMSButton;