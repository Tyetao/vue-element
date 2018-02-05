<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      v-loading.body="listLoading"
      style="width: 100%">
      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
         {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column
        label="权限"
        width="300">
        <template slot-scope="scope">
          <span v-for="role in scope.row.roles">{{role}}</br></span>
        </template>
      </el-table-column>
      <el-table-column
        label="日期"
        width="300">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.createdAt | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="open2(scope.$index, scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getUsersList, removeAccount } from '@/api/account'
  export default {
    data() {
      return {
        listLoading: true,
        tableData: []
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, id) {
        removeAccount(id).then(response => {
          this.handleGetList()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      },
      handleGetList() {
        this.listLoading = true
        getUsersList().then(response => {
          this.tableData = response.data
          this.listLoading = false
        })
      },
      open2(index, id) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.handleDelete(index, id)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    created() {
      this.handleGetList()
    }
  }
</script>
