<template>
  <div>
    <el-container>
      <el-main>
        <!-- 查询条件使用form -->
        <el-form :model="queryParams" ref="queryForm" label-width="80px">
          <el-row :gutter="5">
            <el-col :span="10">
              <el-form-item label="角色名称" prop="roleName">
                <el-input
                  v-model="queryParams.roleName"
                  placeholder="角色名称"
                  clearable
                  @keyup.enter.native="handleQuery"
                />
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="角色名称" prop="roleName">
                <el-input
                  v-model="queryParams.roleName"
                  placeholder="角色名称"
                  clearable
                  @keyup.enter.native="handleQuery"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="5">
            <el-col :span="10">
              <el-button-group>
                <el-button type="info" @click="submitForm()" icon="el-icon-search">查询</el-button>
                <el-button type="warning" @click="resetForm()" icon="el-icon-refresh" >重置</el-button>
              </el-button-group>
            </el-col>
          </el-row>
        </el-form>
        <el-row>
          <el-col :span="10">
            <el-button-group>
              <el-button type="primary" @click="handleAdd()" icon="el-icon-plus">新增</el-button>
              <el-button type="success" @click="handleUpdate()" icon="el-icon-edit" >修改</el-button>
              <el-button type="danger" @click="handleDelete()" icon="el-icon-delete" >删除</el-button>
            </el-button-group>
          </el-col>
          <el-col :span="10">
            <el-button-group>
              <el-button @click="toggleSelection()">取消选择</el-button>
              <el-button @click="toggleSelection([tableData[1], tableData[2]])"
                >反选</el-button
              >
            </el-button-group>
          </el-col>
        </el-row>
        <el-table :data="tableData" style="width: 100%" max-height="250">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column fixed prop="date" label="日期" width="150">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="province" label="省份" width="120">
          </el-table-column>
          <el-table-column prop="city" label="市区" width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="120"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column prop="zip" label="邮编" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "role",
  data() {
    return {
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        roleName: undefined,
        roleKey: undefined,
        status: undefined
      },
      // 表单校验
      rules: {
        roleName: [
          { required: true, message: "角色名称不能为空", trigger: "blur" }
        ],
        roleKey: [
          { required: true, message: "权限字符不能为空", trigger: "blur" }
        ],
        roleSort: [
          { required: true, message: "角色顺序不能为空", trigger: "blur" }
        ]
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  method: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    submitForm() {
      return;
    },
    resetForm() {
      return;
    },
    handleQuery(){
      return;
    },
    handleAdd(){
      return;
    },
    handleUpdate(){
      return;
    },
    handleDelete(){
      return;
    },
  }
};
</script>
