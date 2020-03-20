import React from 'react'
import './anatomy.css'
import './table-anatomy.css'

const TableAnatomy = () => {
  return (
    <div className="table-anatomy component-anatomy">
      <host>
        <part name="table-header">
          <part name="table-title" />
        </part>
        <part name="table-header-row">
          <part name="table-header-cell">Header cell content</part>
          <part name="table-header-cell">Header cell content</part>
          <part name="table-header-cell">Header cell content</part>
          <part name="table-header-cell">Header cell content</part>
        </part>
        <part name="table-row">
          <part name="table-cell">Cell content 1</part>
          <part name="table-cell">Cell content 2</part>
          <part name="table-cell">Cell content 3</part>
          <part name="table-cell">Cell content 4</part>
        </part>
        <part name="table-row">
          <part name="table-cell">Cell content 1</part>
          <part name="table-cell">Cell content 2</part>
          <part name="table-cell">Cell content 3</part>
          <part name="table-cell">Cell content 4</part>
        </part>
        <part name="table-footer">
          <part name="table-pagination">
            <part name="page-item">1</part>
            <part name="page-item">2</part>
            <part name="page-item">3</part>
            <part name="page-item">4</part>
            <part name="page-item">5</part>
          </part>
        </part>
      </host>
    </div>
  )
}

export default TableAnatomy
