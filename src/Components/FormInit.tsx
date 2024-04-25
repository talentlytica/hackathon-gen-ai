import { PropBaseT } from "@/types";
import { Button, Flex, Textarea, TextInput } from "@mantine/core";

type PropsFormInitT = {
  onSuccess?: () => void; 
} & PropBaseT

const FormInit = (props: PropsFormInitT) => {
  const { onSuccess } = props;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSuccess && onSuccess();
  }

  return (
    <form onSubmit={handleSubmit} className={props.className}>
      <TextInput 
        className="mb-3"
        label="Surname"
        required={true}
      />
      <TextInput 
        className="mb-3"
        label="Job Position"
        required={true}
      />
      <TextInput 
        className="mb-3"
        label="Bussines/Company field"
        required={true}
      />
      <Textarea 
        className="mb-6"
        label="Job Desc"
        autosize
        rows={3}
        maxRows={5}
        required={true}
      />

      <Flex justify={"center"}>
        <Button type="submit" color="primary">Save & Next</Button>
      </Flex>
    </form>
  )
}

export default FormInit;