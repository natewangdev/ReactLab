import React from 'react'
import styled from 'styled-components'
import features from '../features'
import Logo from './Logo'

const SidebarContainer = styled.div`
  width: 250px;
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 20px;
  border-right: 1px solid #333;
`

const Category = styled.div`
  margin-bottom: 20px;
`

const CategoryTitle = styled.div`
  color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  background: #2d2d2d;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #333;
  }
`

const MenuItem = styled.div`
  padding: 8px 16px 8px 24px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 4px;
  background: ${props => (props.$active ? '#37373d' : 'transparent')};
  color: ${props => (props.$active ? '#fff' : '#d4d4d4')};

  &:hover {
    background: #37373d;
    color: #fff;
  }
`

const Sidebar = ({ onFeatureSelect, selectedFeature }) => {
  const [expandedCategories, setExpandedCategories] = React.useState(() => {
    const categories = Object.keys(features)
    return categories.reduce(
      (acc, key, index) => ({
        ...acc,
        [key]: index === 0, // Only first category is true
      }),
      {}
    )
  })

  const toggleCategory = category => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  const handleFeatureSelect = feature => {
    onFeatureSelect(feature.metadata.id, feature.code)
  }

  return (
    <SidebarContainer>
      <Logo />
      {Object.entries(features).map(([category, { name, items }]) => (
        <Category key={category}>
          <CategoryTitle onClick={() => toggleCategory(category)}>
            {name}
            <span>{expandedCategories[category] ? '▼' : '▶'}</span>
          </CategoryTitle>
          {expandedCategories[category] &&
            Object.entries(items).map(([key, feature]) => (
              <MenuItem key={key} $active={selectedFeature === feature.metadata.id} onClick={() => handleFeatureSelect(feature)} title={feature.metadata.description}>
                {feature.metadata.name}
              </MenuItem>
            ))}
        </Category>
      ))}
    </SidebarContainer>
  )
}

export default Sidebar
