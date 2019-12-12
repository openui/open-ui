import React from 'react'
import './table-anatomy.css'

const TableAnatomy = () => {
  return (
    <tableComponent anatomy="part">
      <tableHeader anatomy="part">
        <tableTitle anatomy="part"></tableTitle>
      </tableHeader>
      <tableHeaderRow anatomy="part" class="flex grow">
        <tableHeaderCell name="1" anatomy="part">
          {'HeaderCellContent'}
        </tableHeaderCell>
        <tableHeaderCell name="2" anatomy="part">
          {'HeaderCellContent'}
        </tableHeaderCell>
        <tableHeaderCell name="3" anatomy="part">
          {'HeaderCellContent'}
        </tableHeaderCell>
        <tableHeaderCell name="4" anatomy="part">
          {'HeaderCellContent'}
        </tableHeaderCell>
      </tableHeaderRow>
      <tableRow name="1" anatomy="part" class="flex grow">
        <tableCell name="1" anatomy="part">
          {'CellContent'}
        </tableCell>
        <tableCell name="2" anatomy="part">
          {'CellContent'}
        </tableCell>
        <tableCell name="3" anatomy="part">
          {'CellContent'}
        </tableCell>
        <tableCell name="4" anatomy="part">
          {'CellContent'}
        </tableCell>
      </tableRow>
      <tableRow name="2" anatomy="part" class="flex grow">
        <tableCell name="1" anatomy="part">
          {'CellContent'}
        </tableCell>
        <tableCell name="2" anatomy="part">
          {'CellContent'}
        </tableCell>
        <tableCell name="3" anatomy="part">
          {'CellContent'}
        </tableCell>
        <tableCell name="4" anatomy="part">
          {'CellContent'}
        </tableCell>
      </tableRow>
      <tableFooter anatomy="part">
        <tablePagination anatomy="part" class="flex grow">
          <pageItem name="1" anatomy="part">
            1
          </pageItem>
          <pageItem name="2" anatomy="part">
            2
          </pageItem>
          <pageItem name="3" anatomy="part">
            3
          </pageItem>
          <pageItem name="4" anatomy="part">
            4
          </pageItem>
          <pageItem name="5" anatomy="part">
            5
          </pageItem>
        </tablePagination>
      </tableFooter>
    </tableComponent>
  )
}

export default TableAnatomy
