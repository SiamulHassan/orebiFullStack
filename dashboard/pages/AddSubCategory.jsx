import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const AddSubCategory = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    async function allCate() {
      let {
        data: {
          data: {
            CateData: { categories },
          },
        },
      } = await axios.get("http://localhost:8000/api/v1/product/viewcategory");
      let catArray = [];
      categories.map((cateItems) => {
        catArray.push({
          value: cateItems._id,
          label: cateItems.name,
        });
      });
      setCategories(catArray);
    }
    allCate();
  }, []);
  const onFinish = async (values) => {
    console.log(values);
    await axios.post("http://localhost:8000/api/v1/product/createsubcategory", {
      name: values.addsubcategory,
      categoryId,
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value) => {
    setCategoryId(value);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Add Sub-Category"
        name="addsubcategory"
        rules={[
          {
            required: true,
            message: "Please input category name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Category">
        <Select
          style={{
            width: 180,
          }}
          onChange={handleChange}
          options={categories}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddSubCategory;
